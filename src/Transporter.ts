import LightContainer from "./LightContainer";

interface Transporter {
  maxWeight: number;
  addContainer: (container: any) => void;
  getTotalWeight: () => number;
  isOverWeight: () => boolean;
}

export default Transporter;
