# DOM Map: student.html

- body.bodyBackground
  - div#overlay
  - div#spellingMenu
  - form[name="contextListForm"]
    - input[type=hidden] (token, userEvent, userParam, etc.)
    - table.layoutHeader
      - div#topTitleBar
        - div#contextMenu
        - div#contextMenuPane
        - div#userPreferenceMenu
        - div#userPreferenceMenuPane
      - div#c2colorRef
      - div#topMenuBar
        - div#topMenuBarLeft
        - div#actualTopMenuBar
        - div#topMenuBarRight
    - table#contextTabs (nav tabs)
    - div#contentArea.contentPad
      - table.optionsBar
      - table.grid (student list)
  - div#messageWindow

## 🧩 Component Candidates
- student-tabs
