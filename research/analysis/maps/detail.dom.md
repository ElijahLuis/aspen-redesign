# DOM Map: detail.html

- body
  - div.layout-wrapper
    - nav.top-nav
    - div (theme toggle)
    - div.layout-container
      - aside.sidebar
        - nav.sidebar-nav
          - ul
            - li > a
      - main.main-panel
        - nav.student-tabs
        - form.detail-form
          - section.form-section (Student Info)
            - h2.form-section__title
            - div.detail-form__row
              - label[for="studentName"]
              - input#studentName
              - span.error-message
            - div.detail-form__row
              - label[for="grade"]
              - select#grade
            - div.detail-form__row
              - label[for="studentId"]
              - input#studentId
          - section.form-section (Health)
            - h2.form-section__title
            - div.detail-form__row
              - label[for="notes"]
              - textarea#notes
          - div.form-actions.form-actions--sticky
            - button.button (Save)
            - button.button (Cancel)

## 🧩 Component Candidates
- detail-form
- student-tabs
