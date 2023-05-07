const { createElement } = react;

export const TabsSection = ({ tabs, activeTab, handleTabNavigation }) => {
  console.log(activeTab);
  return createElement(
    'div',
    { class: 'tabs_section', onclick: handleTabNavigation },
    tabs.map((tabItem) => {
      return createElement(
        'span',
        {
          data_key: `${tabItem.id}`,
          class: `tab ${activeTab === tabItem.id ? 'active_tab' : ''}`,
        },
        [tabItem.display_name],
      );
    }),
  );
};
