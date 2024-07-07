"use client";
import Navbar from "@/components/Navbar";
import BasicGates, { GateTypes } from "@/components/gates/BasicGates";

export default function Page() {
  return (
	<main>
	<Navbar />
    <div className="mt-16 mx-auto max-w-2xl px-4 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Logic Gates</h2>
        <p className="mb-6">
          Welcome to the world of basic logic gates! Logic gates are fundamental building blocks of digital circuits, responsible for performing logical operations on binary inputs to produce a single binary output. Understanding how these gates work is essential for grasping the foundations of digital electronics.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Truth Table</h2>
        <p className="mb-6">
          A truth table outlines the output of a logical expression for all possible input combinations. It consists of rows and columns showing input variables and their corresponding outputs.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Basic Electronic Devices</h2>
        <p className="mb-6">
          In this tutorial, we cover simple basic logic gates, exploring their truth tables and practical applications in electronic systems.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">AND Gate</h2>
        <p className="mb-6">
          The AND gate produces true (1) only when all its inputs are true (1). It symbolizes a logical "and" function. Mathematically, A and B can be written as C = A & B. Here's the truth table for a 2-input AND gate:
        </p>
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">A</th>
                <th className="border border-gray-300 px-4 py-2">B</th>
                <th className="border border-gray-300 px-4 py-2">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
	  <p className="mb-6">Try it out yourself by clicking on the input buttons to toggle their values.    </p>
	  <BasicGates gateTypes={GateTypes.AND} />;
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">OR Gate</h2>
        <p className="mb-6">
          The OR gate produces true (1) if at least one input is true (1). It symbolizes a logical "or" function. Mathematically, it can be represented as C = A || B. Here's the truth table for an OR gate:
        </p>
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">A</th>
                <th className="border border-gray-300 px-4 py-2">B</th>
                <th className="border border-gray-300 px-4 py-2">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
	  <p className="mb-6">Try it out yourself by clicking on the input buttons to toggle their values.    </p>
	  <BasicGates gateTypes={GateTypes.OR} />;

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">XOR Gate</h2>
        <p className="mb-6">
          The XOR gate produces true (1) only when one, and only one, input is true (1). It symbolizes an exclusive OR function. Here's the truth table for an XOR gate:
        </p>
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">A</th>
                <th className="border border-gray-300 px-4 py-2">B</th>
                <th className="border border-gray-300 px-4 py-2">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
            </tbody>
          </table>
		  <p className="mb-6">Try it out yourself by clicking on the input buttons to toggle their values.    </p>
		  <BasicGates gateTypes={GateTypes.XOR} />;
        </div>
      </div>
    </div>
	</main>
  );
}
