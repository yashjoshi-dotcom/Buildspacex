"use client";

import test from "node:test";
import { useCallback } from "react";
import ReactFlow, {
	addEdge,
	Background,
	Handle,
	Position,
	useEdgesState,
	useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

const AndNode = ({ data }) => {
	return (
		<div
			style={{
				padding: "10px",
				border: "1px solid #ddd",
				borderRadius: "5px",
				textAlign: "center",
				background: "#fff",
			}}
		>
			<Handle
				type="source"
				position={Position.Left}
				id="a"
				style={{ top: "30%" }}
			/>
			<Handle
				type="source"
				position={Position.Left}
				id="b"
				style={{ top: "70%" }}
			/>
			<div>{data.label}</div>
			<Handle type="target" position={Position.Right} id="c" />
		</div>
	);
};

const initialNodes = [
	{
		id: "1",
		position: { x: 0, y: 0 },
		data: { label: "0" },
		type: "output",
		targetPosition: "right",
	},
	{
		id: "2",
		position: { x: 0, y: 100 },
		data: { label: "0" },
		type: "output",
		targetPosition: "right",
	},
	{
		id: "3",
		position: { x: 200, y: 50 },
		data: { label: "AND" },
		type: "andNode", // Specify the custom node type
	},
	{
		id: "4",
		position: { x: 300, y: 50 },
		data: { label: "0" },
		type: "input",
		sourcePosition: "left",
	},
];

const initialEdges = [
	{ id: "e1-gate", source: "3", sourceHandle: "a", target: "1" },
	{ id: "e2-gate", source: "3", sourceHandle: "b", target: "2" },
	{ id: "e3-output", source: "4", sourceHandle: "c", target: "3" },
];

const nodeTypes = {
	andNode: AndNode,
};

export default function Page() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const handleNodeClick = (event, node) => {
		if (node.type === "output") {
			setNodes((nds) => {
				const updatedNodes = nds.map((n) => {
					if (n.id === node.id) {
						const newLabel = n.data.label === "1" ? "0" : "1";
						return {
							...n,
							data: { ...n.data, label: newLabel },
						};
					}
					return n;
				});

				const allOutputsAreOne = updatedNodes
					.filter((n) => n.type === "output")
					.every((n) => n.data.label === "1");

				return updatedNodes.map((n) => {
					if (n.type === "input") {
						return {
							...n,
							data: {
								...n.data,
								label: allOutputsAreOne ? "1" : "0",
							},
						};
					}
					return n;
				});
			});
		}
	};

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="h-96 w-9/12">
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					nodeTypes={nodeTypes}
					onNodeClick={handleNodeClick} // Register the custom node type
				>
					<Background variant="dots" gap={12} size={1} />
				</ReactFlow>
			</div>
		</div>
	);
}
