export let
    TextSelection = {
        script: `&lt;p class="user-select-all">This paragraph will be entirely selected when clicked by the user.&lt;/p>
&lt;p class="user-select-auto">This paragraph has default select behavior.&lt;/p>
&lt;p class="user-select-none mb-0">This paragraph will not be selectable when clicked by the user.&lt;/p>`
    },
    POINTEREVENTS = {
        script: `&lt;p>&lt;a href="javascript:void(0);" class="pe-none text-primary fw-medium text-decoration-underline" tabindex="-1" aria-disabled="true">This link&lt;/a> can not be clicked.&lt;/p>
     &lt;p>&lt;a href="javascript:void(0);" class="pe-auto text-primary fw-medium text-decoration-underline">This link&lt;/a> can be clicked (this is default behavior).&lt;/p>
     &lt;p class="pe-none mb-0">
        &lt;a href="javascript:void(0);" tabindex="-1" class="text-primary fw-medium text-decoration-underline" aria-disabled="true">This link&lt;/a> 
        can not be clicked because the <code>pointer-events&lt;/code> property is inherited from its parent. However, 
        &lt;a href="javascript:void(0);" class="pe-auto">this link&lt;/a> has a <code>pe-auto&lt;/code> class and can be clicked.
     &lt;/p>`
    },
    LINKOPACITY = {
        script: `&lt;p>&lt;a class="link-opacity-10" href="javascript:void(0);">Link opacity 10&lt;/a>&lt;/p>
        &lt;p>&lt;a class="link-opacity-25" href="javascript:void(0);">Link opacity 25&lt;/a>&lt;/p >
        &lt;p>&lt;a class="link-opacity-50" href="javascript:void(0);">Link opacity 50&lt;/a>&lt;/p>
        &lt;p>&lt;a class="link-opacity-75" href="javascript:void(0);">Link opacity 75&lt;/a>&lt;/p>
        &lt;p class="mb-0">&lt;a class="link-opacity-100" href="javascript:void(0);">Link opacity 100&lt;/a>&lt;/p>    `
    },
    LINKHOVERVARIANT = {
        script: ` &lt;a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline" href="javascript:void(0);"> 
            Underline opacity 0 
         &lt;/a>`
    },
    LINKUNDERLINECOLORS = {
        script: ` &lt;p>&lt;a href="javascript:void(0);" class="link-underline-primary text-decoration-underline">Primary underline&lt;/a>&lt;/p>
        &lt;p>&lt;a href="javascript:void(0);" class="link-underline-secondary text-decoration-underline">Secondary underline&lt;/a>&lt;/p>
        &lt;p>&lt;a href="javascript:void(0);" class="link-underline-success text-decoration-underline">Success underline&lt;/a>&lt;/p>
        &lt;p>&lt;a href="javascript:void(0);" class="link-underline-danger text-decoration-underline">Danger underline&lt;/a>&lt;/p>
        &lt;p>&lt;a href="javascript:void(0);" class="link-underline-warning text-decoration-underline">Warning underline&lt;/a>&lt;/p>
        &lt;p>&lt;a href="javascript:void(0);" class="link-underline-info text-decoration-underline">Info underline&lt;/a>&lt;/p>
        &lt;p>&lt;a href="javascript:void(0);" class="link-underline-light text-decoration-underline">Light underline&lt;/a>&lt;/p>
        &lt;p class="mb-0">&lt;a href="javascript:void(0);" class="link-underline-dark text-decoration-underline">Dark underline&lt;/a>&lt;/p>`
    },
    LINKUNDERLINEOFFSET = {
        script: ` &lt;p>
                    &lt;a href="javascript:void(0);" class="text-decoration-underline">Default link&lt;/a>
        &lt;/p>
        &lt;p>
            &lt;a class="link-offset-1 text-decoration-underline" href="javascript:void(0);">Offset 1 link&lt;/a>
        &lt;/p>
        &lt;p>
            &lt;a class="link-offset-2 text-decoration-underline" href="javascript:void(0);">Offset 2 link&lt;/a>
        &lt;/p>
        &lt;p class="mb-0">
            &lt;a class="link-offset-3 text-decoration-underline" href="javascript:void(0);">Offset 3 link&lt;/a>
        &lt;/p>`
    },
    LINKUNDERLINEOPACITY = {
        script: `&lt;p>&lt;a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" href="javascript:void(0);">Underline opacity 0&lt;/a>&lt;/p>
        &lt;p>&lt;a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" href="javascript:void(0);">Underline opacity 10&lt;/a>&lt;/p>
        &lt;p>&lt;a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" href="javascript:void(0);">Underline opacity 25&lt;/a>&lt;/p>
        &lt;p>&lt;a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" href="javascript:void(0);">Underline opacity 50&lt;/a>&lt;/p>
        &lt;p>&lt;a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" href="javascript:void(0);">Underline opacity 75&lt;/a>&lt;/p>
        &lt;p>&lt;a class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" href="javascript:void(0);">Underline opacity 100&lt;/a>&lt;/p>`
    },
    LINKHOVEROPACITY = {
        script: `&lt;p>&lt;a class="link-opacity-10-hover" href="javascript:void(0);">Link hover opacity 10&lt;/a>&lt;/p>
        &lt;p>&lt;a class="link-opacity-25-hover" href="javascript:void(0);">Link hover opacity 25&lt;/a>&lt;/p>
        &lt;p>&lt;a class="link-opacity-50-hover" href="javascript:void(0);">Link hover opacity 50&lt;/a>&lt;/p>
        &lt;p>&lt;a class="link-opacity-75-hover" href="javascript:void(0);">Link hover opacity 75&lt;/a>&lt;/p>
        &lt;p class="mb-0">&lt;a class="link-opacity-100-hover" href="javascript:void(0);">Link hover opacity 100&lt;/a>&lt;/p>`
    },
    COLOREDLINKS = {
        script: `&lt;p>&lt;a href="javascript:void(0);" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Primary link&lt;/a>&lt;/p>
    &lt;p>&lt;a href="javascript:void(0);" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Secondary link&lt;/a>&lt;/p>
    &lt;p>&lt;a href="javascript:void(0);" class="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Success link&lt;/a>&lt;/p>
    &lt;p>&lt;a href="javascript:void(0);" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Danger link&lt;/a>&lt;/p>
    &lt;p>&lt;a href="javascript:void(0);" class="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Warning link&lt;/a>&lt;/p>
    &lt;p>&lt;a href="javascript:void(0);" class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Info link&lt;/a>&lt;/p>
    &lt;p>&lt;a href="javascript:void(0);" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Light link&lt;/a>&lt;/p>
    &lt;p>&lt;a href="javascript:void(0);" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-decoration-underline">Dark link&lt;/a>&lt;/p>
    &lt;p class="mb-0">&lt;a href="javascript:void(0);" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover text-decoration-underline ">Emphasis link&lt;/a>&lt;/p>`
    }
