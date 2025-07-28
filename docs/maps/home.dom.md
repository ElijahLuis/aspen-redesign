# DOM Map: home.html

- body.bodyBackground
  - form[name="authenticatedActionForm"]
    - input[type=hidden] (token, userEvent, userParam, etc.)
  - div#loadingCover.loadingCover
  - div#layoutHeader.layoutHeader
    - div#header
      - table (title bar and tabs)
  - div#main
    - table
      - td#pageMenuContainer.pageMenuContainer
      - td#widgetsContainer.widgetsContainer
  - div#myResourcesPanel.myResources.draggableByHandle
    - div.draggableHandle.c2Background
    - div#myResourcesTreePanel
      - div#myResourcesContent
  - div#messageWindow

## 🧩 Component Candidates
- PageMenu
- WidgetPanel
- ResourceDrawer
