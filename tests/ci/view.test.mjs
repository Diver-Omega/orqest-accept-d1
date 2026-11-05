// Protected suite for the synthetic list screen of ORQEST's M5 acceptance D1. The suite revision
// supplies this file at tests/protected/view.test.mjs; a candidate's own copy of that path is
// replaced. A namespace import: a missing export fails its own tests, not the file.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import * as list from '../../src/list.mjs'

const counted = (t, checkId, assertions) => {
  let ran = 0
  for (const assertion of assertions) {
    assertion()
    ran += 1
  }
  t.diagnostic(`orqest-assertions ${checkId} ${ran}`)
}

const text = (value) => () => assert.ok(typeof value === 'string' && value.length > 0)

test('view-empty', (t) => {
  counted(t, 'view-empty', [
    text(list.EMPTY_STATE),
    () => assert.equal(list.View({ ok: true, items: [] }), list.EMPTY_STATE),
  ])
})

test('view-failed', (t) => {
  counted(t, 'view-failed', [
    text(list.FAILED_STATE),
    () => assert.equal(list.View({ ok: false, items: [] }), list.FAILED_STATE),
  ])
})

test('view-items', (t) => {
  counted(t, 'view-items', [
    () => assert.equal(list.View({ ok: true, items: ['甲', '乙'] }), '<li>甲</li><li>乙</li>'),
    () => assert.equal(list.View({ ok: true, items: ['x'] }), '<li>x</li>'),
  ])
})
