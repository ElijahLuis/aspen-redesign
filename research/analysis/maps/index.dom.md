# DOM Map: index.html

- body.loginBackground
  - div.wrapper
    - div.main-content
      - noscript
        - div.noscript-warning
      - header.login-header
        - div.logo-wrapper
          - img.aspen-logo
        - div (theme toggle)
          - button#themeToggle.theme-toggle
      - main.login-main
        - form.logonDetailContainer[name="logonForm"]
          - input[type=hidden] (token, userEvent, userParam, etc.)
          - h2.login-title
          - label + input#username.logonInput
          - label + input#password.logonInput
          - label + select#languageSelect.logonSelect
          - div.login-links (help & reset links)
          - button#logonButton.button
          - div.login-legal
            - iframe
      - footer.login-footer.footer
        - div.footer-left
        - div.footer-right

## 🧩 Component Candidates
- login-form
- login-footer
