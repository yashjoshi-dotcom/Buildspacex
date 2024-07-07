"use client";

import { init } from "next/dist/compiled/webpack/webpack";
import ReactFlow, {
	Background,
	Handle,
	Position,
	useEdgesState,
	useNodesState,
	NodeProps,
	NodeMouseHandler,
	BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";

type Props = {
	label: string;
};

const CustomNode = ({ data }: NodeProps) => {
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

type initialNodesType = {
	id: string;
	position: {
		x: number;
		y: number;
	};
	data: {
		label: string;
	};
	type: string;
	targetPosition?: Position | undefined;
	sourcePosition?: Position | undefined;
};

const initialNodes: initialNodesType[] = [
	{
		id: "1",
		position: { x: 50, y: 60 },
		data: { label: "0" },
		type: "output",
		targetPosition: Position.Right,
	},
	{
		id: "2",
		position: { x: 50, y: 180 },
		data: { label: "0" },
		type: "output",
		targetPosition: Position.Right,
	},
	{
		id: "3",
		position: { x: 250, y: 120 },
		data: { label: "AND" },
		type: "andNode", // Specify the custom node type
		targetPosition: undefined,
	},
	{
		id: "4",
		position: { x: 325, y: 120 },
		data: { label: "0" },
		type: "input",
		sourcePosition: Position.Left,
	},
];

const initialEdges = [
	{ id: "e1-gate", source: "3", sourceHandle: "a", target: "1" },
	{ id: "e2-gate", source: "3", sourceHandle: "b", target: "2" },
	{ id: "e3-output", source: "4", sourceHandle: "c", target: "3" },
];

const NodeTypes = {
	andNode: CustomNode,
};

export const enum GateTypes {
	AND = "AND",
	OR = "OR",
	NOT = "NOT",
	XOR = "XOR",
	XNOR = "XNOR",
}

type BasicGatesProps = {
	gateTypes: GateTypes;
};

export default function BasicGates({ gateTypes }: BasicGatesProps) {
	switch (gateTypes) {
		case GateTypes.AND:
			initialNodes[2].data.label = "AND";
			break;
		case GateTypes.OR:
			initialNodes[2].data.label = "OR";
			break;
		case GateTypes.NOT:
			initialNodes[2].data.label = "NOT";
			break;
		case GateTypes.XOR:
			initialNodes[2].data.label = "XOR";
			break;
		case GateTypes.XNOR:
			initialNodes[2].data.label = "XNOR";
			break;
	}

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const handleNodeClick: NodeMouseHandler = (event, node) => {
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

				let onecount = 0;
				let zerocount = 0;
				const allOutputsAreOne = updatedNodes
					.filter((n) => n.type === "output")
					.map((node) => {
						node.data.label === "1" ? onecount++ : zerocount++;
					});

				return updatedNodes.map((n) => {
					if (n.type === "input") {
						switch (gateTypes) {
							case GateTypes.AND:
								return {
									...n,
									data: {
										...n.data,
										label:
											onecount ===
											updatedNodes.filter(
												(n) => n.type === "output",
											).length
												? "1"
												: "0",
									},
								};
							case GateTypes.OR:
								return {
									...n,
									data: {
										...n.data,
										label: onecount > 0 ? "1" : "0",
									},
								};
							case GateTypes.NOT:
								return {
									...n,
									data: {
										...n.data,
										label: onecount === 0 ? "1" : "0",
									},
								};
							case GateTypes.XOR:
								return {
									...n,
									data: {
										...n.data,
										label: onecount % 2 === 0 ? "0" : "1",
									},
								};
							case GateTypes.XNOR:
								return {
									...n,
									data: {
										...n.data,
										label: onecount % 2 === 0 ? "1" : "0",
									},
								};
						}
					}
					return n;
				});
			});
		}
	};

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="h-72 w-9/12">
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					nodeTypes={NodeTypes}
					onNodeClick={handleNodeClick} // Register the custom node type
				>
					<Background
						variant={BackgroundVariant.Dots}
						gap={12}
						size={1}
						color="#000000"
					/>
				</ReactFlow>
			</div>
		</div>
	);
}
