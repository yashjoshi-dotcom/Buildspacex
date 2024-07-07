"use client";

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
		position: { x: 400, y: 50 },
		data: { label: "0" },
		type: "input",
		sourcePosition: "left",
	},
];

const initialEdges = [];

const nodeTypes = {
	andNode: AndNode,
};

export default function Page() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges],
	);

	const handleNodeClick = (event, node) => {
		if (node.type === "output") {
			setNodes((nds) =>
				nds.map((n) => {
					if (n.id === node.id) {
						const newLabel = n.data.label === "1" ? "0" : "1";
						return {
							...n,
							data: { ...n.data, label: newLabel },
						};
					}
					return n;
				}),
			);
		}
	};

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				onNodeClick={handleNodeClick} // Register the custom node type
			>
				<Background variant="dots" gap={12} size={1} />
			</ReactFlow>
		</div>
	);
}
