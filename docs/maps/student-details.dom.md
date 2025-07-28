# DOM Map: student_details.html

- body.bodyBackground
  - div#overlay
  - div#spellingMenu
  - form[name="personAddressDetailForm"]
    - input[type=hidden] (token, userEvent, userParam, etc.)
    - table#layoutHeader.layoutHeader
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
    - div#contentArea.contentPad
      - table.breadcrumbs
      - table.nav buttons
      - div#searchStringDiv.searchStringDiv
      - table.layoutVerticalTabsContainer
        - div#layoutVerticalTabs
          - tr.verticalTabSelected
          - tr.verticalTab (Visits, Immunizations, Conditions, etc.)
      - td.contentContainer
        - table.optionsBar
          - div#maximizeMenuButton
          - div#options + div#optionsPane
          - div#reportsMenu + div#reportsMenuPane
          - div#helpMenu + div#helpMenuPane
        - div#collapsibleDiv0.detailContainer
        - div#collapsibleDiv1
        - div#collapsibleDiv2.detailContainer
        - div#collapsibleDiv3.detailContainer
  - div#messageWindow

## 🧩 Component Candidates
- detail-form
