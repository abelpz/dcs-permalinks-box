import React from "react";

export const PermalinksContext = React.createContext({
  routes: [
    {
      entry: "/",
      path: []
    }
  ],
  id: null
});

export default function PermalinksConfig({
  routes,
  config,
  id,
  children,
  ...props
}) {
  const value = { routes, config, id };
  return (
    <PermalinksContext.Provider value={value}>
      {children}
    </PermalinksContext.Provider>
  );
}
