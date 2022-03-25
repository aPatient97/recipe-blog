const lightboxFunction = require('./lightbox')
const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')

describe('lightbox tests', () => {

    describe('lightbox function which creates a "pop out" div with content', () => {
        test('it exists', () => {
            expect(lightboxFunction).toBeDefined()
        })
    })

    describe('index.html', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = html.toString()
        })

        test('it has a page title', () => {
            let h1 = document.querySelector('h1')
            expect(h1.textContent).toContain('Welcome to Anonoblog')
        })

        test('it creates a div with ID of lightbox', () => {
            let lightbox = document.querySelector('#lightbox')
            expect(lightbox.className).toBe('lightbox')
        })
    })

}) 

