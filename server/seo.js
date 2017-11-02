function injectHtml (template, context) {
  const html = template.replace(
    '<html>',
    `<html data-vue-meta-server-rendered ${context.meta.htmlAttrs.text()}>`
  )

  return html
}

function injectHead (template, context) {
  const { meta } = context
  const tag = template.replace(
    '<head>',
    `<head ${meta.headAttrs.text()}>`
  )

  return tag.replace(
    '</head>',
    `${
      meta.meta.text() + meta.title.text() + meta.link.text() +
      meta.style.text() + meta.script.text() + meta.noscript.text()
    } </head>`
  )
}

function injectBody (template, context) {
  return template.replace(
    '<body>',
    `<body ${context.meta.bodyAttrs.text()}>`
  )
}

function injectToTemplate (template, context) {
  if (!context.meta || !context.meta.inject) return template

  context.meta.inject()

  const processors = [
    injectHtml,
    injectHead,
    injectBody
  ]

  for (let processor of processors) {
    template = processor.call(this, template, context)
  }

  return template
}

module.exports = injectToTemplate
