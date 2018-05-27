import NuxtSelector from 'testcafe-nuxt-selectors'

fixture('Getting Started')
  .page(`${process.env.BASE_TEST_URL}/`)
  .beforeEach(async () => await NuxtSelector())

test('nuxt uses correct layout', async (t) => {
  const nuxt = NuxtSelector()
  const vm = await nuxt.getVue()

  await t.expect(nuxt.exists).ok()
  await t.expect(vm.state.layoutName).eql('default')
})

test('all Comments are present', async (t) => {
  const comments = NuxtSelector('Nuxt Comment')
  const count = await comments.count

  await t.expect(count).eql(10)
})

test('click on a Comment button increments rating', async (t) => {
  const comment = NuxtSelector('Nuxt Comment').nth(0)

  const increment = comment.find('button').withText('+')
  const decrement = comment.find('button').withText('-')
  const rating = comment.find('span')

  await t
    .expect(rating.innerText).contains('0')
    .click(increment)
    .expect(rating.innerText).contains('1')
    .click(decrement)
    .expect(rating.innerText).contains('0')
})
