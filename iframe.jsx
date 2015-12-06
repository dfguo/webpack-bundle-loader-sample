var { React, Morearty, Child, Ctx } = window.parent.vent

const Bootstrap = Ctx.copy().bootstrap(Child)
React.render(<Bootstrap />, document.getElementById('iframe-container'))
