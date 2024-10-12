declare module "react-graph-vis" {
  import { Component } from "react";

  export interface GraphData {
    nodes: any[];
    edges: any[];
  }

  export interface Options {
    // Define the options interface as needed
  }

  export interface Events {
    // Define the events interface as needed
  }

  export default class Graph extends Component<{
    graph: GraphData;
    options?: Options;
    events?: Events;
    getNetwork?: (network: any) => void;
    identifier?: string;
    style?: React.CSSProperties;
  }> {}
}
