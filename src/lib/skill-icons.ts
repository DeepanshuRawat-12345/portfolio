import {
  Eye,
  ScanEye,
  Camera,
  Brain,
  LineChart,
  Sigma,
  Cpu,
  Radio,
  CircuitBoard,
  Code2,
  GitBranch,
  Cloud,
  type LucideIcon,
} from "lucide-react";

/**
 * Content files reference icons by string key (data can't hold a React
 * component), resolved here to the actual component. Shared at src/lib
 * rather than nested under features/skills — Project cards will resolve
 * tech-stack icons the same way later, via the same skill IDs.
 */
export const skillIcons = {
  eye: Eye,
  scanEye: ScanEye,
  camera: Camera,
  brain: Brain,
  lineChart: LineChart,
  sigma: Sigma,
  cpu: Cpu,
  radio: Radio,
  circuitBoard: CircuitBoard,
  code: Code2,
  gitBranch: GitBranch,
  cloud: Cloud,
} satisfies Record<string, LucideIcon>;

export type SkillIconName = keyof typeof skillIcons;
