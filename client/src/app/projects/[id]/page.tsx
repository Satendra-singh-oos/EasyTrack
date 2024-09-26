"use client";

import React, { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import ListView from "../ListView";
import TimeLineView from "../TimelineView";
import TableView from "../Table";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    <div>
      {/* TODO :Model New Task */}

      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab == "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}

      {activeTab == "List" && (
        <ListView id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}

      {activeTab == "Timeline" && (
        <TimeLineView id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}

      {activeTab == "Table" && (
        <TableView id={id} setIsModalNewTaskOpen={setIsModelNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
