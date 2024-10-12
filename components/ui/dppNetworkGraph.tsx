import React from "react";
import Graph, { GraphData, Options } from "react-graph-vis";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Node {
  id: number;
  label: string;
  title: string;
  color: string;
}

interface Edge {
  from: number;
  to: number;
  arrows: string;
  label: string;
}

const ProductMovementNetwork: React.FC = () => {
  const graph: GraphData = {
    nodes: [
      {
        id: 1,
        label: "Manufacturer",
        title: "Produces the product",
        color: "#FFB3BA",
      },
      {
        id: 2,
        label: "Warehouse A",
        title: "Central storage",
        color: "#BAFFC9",
      },
      {
        id: 3,
        label: "Warehouse B",
        title: "Regional storage",
        color: "#BAE1FF",
      },
      { id: 4, label: "Vendor 1", title: "Retail store", color: "#FFFFBA" },
      { id: 5, label: "Vendor 2", title: "Online store", color: "#FFDFBA" },
      {
        id: 6,
        label: "Vendor 3",
        title: "Wholesale distributor",
        color: "#FFB3BA",
      },
      { id: 7, label: "Customer", title: "End consumer", color: "#E0BBE4" },
    ] as Node[],
    edges: [
      { from: 1, to: 2, arrows: "to", label: "Ship to central" },
      { from: 1, to: 3, arrows: "to", label: "Ship to regional" },
      { from: 2, to: 4, arrows: "to", label: "Distribute" },
      { from: 2, to: 5, arrows: "to", label: "Distribute" },
      { from: 3, to: 6, arrows: "to", label: "Distribute" },
      { from: 4, to: 7, arrows: "to", label: "Sell" },
      { from: 5, to: 7, arrows: "to", label: "Sell" },
      { from: 6, to: 7, arrows: "to", label: "Sell" },
    ] as Edge[],
  };

  const options: Options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#999999",
      width: 1,
      smooth: {
        type: "continuous",
      },
    },
    nodes: {
      shape: "box",
      font: {
        size: 12,
        color: "#333333",
      },
      borderWidth: 1,
      shadow: false,
    },
    physics: {
      enabled: false,
    },
    height: "500px",
    interaction: {
      dragNodes: false,
      dragView: false,
      zoomView: false,
    },
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Product Movement Network</CardTitle>
        <CardDescription>
          Visualization of product flow from manufacturer to customer
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Graph graph={graph} options={options} />
      </CardContent>
    </Card>
  );
};

export default ProductMovementNetwork;
