import React, { createRoot } from "react-dom/client";
import MetricsDashboardDisplay from "./components/MetricsDashboardDisplay";
import { mockData } from "./mockData";
import "./styles/reset.css";
const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
    <MetricsDashboardDisplay {...mockData} />
);
