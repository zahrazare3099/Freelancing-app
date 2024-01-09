import React from "react";

export default function Table({ children }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto rounded-md">
      <table>{children}</table>
    </div>
  );
}

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
