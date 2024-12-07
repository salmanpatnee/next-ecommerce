import React from "react";

interface Props {
  subtitle: string;
  title: string;
}

const Title = ({ subtitle, title }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <span className="w-5 h-10 bg-primary inline-block rounded"></span>
        <span className="sub-title">{subtitle}</span>
      </div>
      <h2 className="title mb-10">{title}</h2>
    </div>
  );
};

export default Title;
