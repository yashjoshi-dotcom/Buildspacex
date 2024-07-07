"use client";

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
				style={{ top: "50%" }}
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
		position: { x: 0, y: 50 },
		data: { label: "0" },
		type: "output",
		targetPosition: Position.Right,
	},
	{
		id: "3",
		position: { x: 200, y: 46 },
		data: { label: "NOT" },
		type: "andNode", // Specify the custom node type
	},
	{
		id: "4",
		position: { x: 300, y: 50 },
		data: { label: "1" },
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

export default function NotGate() {
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

				return updatedNodes.map((n) => {
					if (n.type === "input") {
						const updatedNode = updatedNodes.find(
							(n) => n.id === "1",
						);
						const newLabel =
							updatedNode && updatedNode.data.label === "1"
								? "0"
								: "1";
						return {
							...n,
							data: { ...n.data, label: newLabel },
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
