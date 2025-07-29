# Notes for home.html:

 ### Tech Stack
- **HTML**: XHTML 1.0 Strict — ancient but deliberate for backwards compatibility
- **CSS**: Custom styles, jQuery UI (1.12.1), legacy layout via widget.css, common-header.css, etc.
- **JavaScript**:
    - jQuery 3.5.1
    - Query UI
    - CKEditor (for rich text)
    - Custom scripts like menu.js, dateTime.js, myResourcesSupport.js

### Session Handling
- Hardcoded session timeout logic via JS (resetSessionTimeout, updateSessionTimeout)

### Dynamic Loading
- .load() calls like $('#pageMenuContainer').load(rewriteUrl("pageMenu.do"))
- Suggests a server-rendered component model (Struts/Java back-end very likely)

## Authentication and Security
- Classic server side auth with form-based POSTs and session cookies
- There’s a `<form name="authenticatedActionForm">` at the top
- Hidden fields carry a CSRF-like token: org.apache.struts.taglib.html.TOKEN
- Session ID stored in JS var: sessionId = *'DFBcOSi...'*
- confirmLogout() triggers logout with basic JS + redirect

## URL
`http://aspen.cps.edu/aspen/home.do`

## Structure
- XHTML 1.0 Strict layout
- Tabs: Pages, Student, Visit, Condition, Screening, Medication, Alert
- Dynamic areas:
  - `#pageMenuContainer` - loaded via jQuery `.load("pageMenu.do")`
  - `#widgetsContainer` - deferred widget panel (loaded async)
  - `#myResourcesContent` - custom resource pane

## Scripts
- jQuery 3.5.1, jQuery UI 1.12.1
- Custom: `common.js`, `menu.js`, `resourceGrabber.js`
- CKEditor for input fields

## Observations
- Static shell loads fast; data populates after via jQuery `.load()`
- Strong signs of a Java/Struts back end
- No SPA routing; page refresh required per tab




