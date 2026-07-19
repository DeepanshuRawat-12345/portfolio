import { skillSchema, type Skill } from "@/lib/schemas/skill.schema";

/**
 * Starter set, not a confirmed final inventory — same philosophy as the
 * About section's portrait placeholder: representative of the stated
 * focus areas (AI/ML, Computer Vision, Data Analytics, IoT) rather than
 * invented specifics presented as confirmed fact. Edit freely — the
 * Skills component reads entirely from this file and derives its own
 * category groups from whatever's here, so adding, removing, or
 * re-categorizing a skill never requires touching component code.
 */
const rawSkills: Skill[] = [
  {
    id: "opencv",
    name: "OpenCV",
    icon: "scanEye",
    category: "perception",
  },
  {
    id: "object-detection",
    name: "YOLO / Object Detection",
    icon: "eye",
    category: "perception",
  },
  {
    id: "image-processing",
    name: "Image Processing",
    icon: "camera",
    category: "perception",
  },

  {
    id: "python",
    name: "Python",
    icon: "code",
    category: "learning-and-data",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    icon: "brain",
    category: "learning-and-data",
  },
  {
    id: "pandas-numpy",
    name: "Pandas / NumPy",
    icon: "sigma",
    category: "learning-and-data",
  },
  {
    id: "data-visualization",
    name: "Data Visualization",
    icon: "lineChart",
    category: "learning-and-data",
  },

  {
    id: "arduino",
    name: "Arduino",
    icon: "circuitBoard",
    category: "connected-systems",
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    icon: "cpu",
    category: "connected-systems",
  },
  {
    id: "mqtt",
    name: "MQTT",
    icon: "radio",
    category: "connected-systems",
  },

  {
    id: "typescript",
    name: "TypeScript / JavaScript",
    icon: "code",
    category: "engineering-foundations",
  },
  {
    id: "git",
    name: "Git",
    icon: "gitBranch",
    category: "engineering-foundations",
  },
  {
    id: "cloud-deployment",
    name: "Cloud Deployment",
    icon: "cloud",
    category: "engineering-foundations",
  },
];

export const skills: Skill[] = rawSkills;

// Runtime shape validation, run at module load — throws (failing the
// build) on a malformed entry rather than surfacing as a broken render.
rawSkills.forEach((skill) => skillSchema.parse(skill));
