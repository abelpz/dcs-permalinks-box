import React from "react";

export const PermalinksContext = React.createContext({
  routes: [
    {
      entry: "/",
      path: []
    }
  ]
});

export default function PermalinksConfig({
  routes,
  config,
  children,
  ...props
}) {
  const value = { routes, config };
  return (
    <PermalinksContext.Provider value={value}>
      {children}
    </PermalinksContext.Provider>
  );
}
