const gTrans = {
    title: {
        'en-us': 'title',
        he: 'שם הספר'
    },
    price: {
        'en-us': 'price',
        he: 'מחיר'
    },
    action: {
        'en-us': 'actions',
        he: 'פעולות'
    },
    id: {
        'en-us': 'id',
        he: 'מ.ס'
    },
    language: {
        'en-us': 'Choose a language',
        he: 'אנא בחר שפה'
    },
    button: {
        'en-us': 'Add a book to the list',
        he: 'הוסף ספר לרשימה'
    },
    read: {
        'en-us': 'Read',
        he: 'פירוט'
    },
    update: {
        'en-us': 'Update',
        he: 'עדכן'
    },
    delete: {
        'en-us': 'delete',
        he: 'הסר'
    },
    page: {
        'en-us': 'Next Page',
        he: 'עמוד הבא'
    },
    addBookBtn: {
        'en-us': 'Add book',
        he: 'הוסף ספר'
    },
    bookName: {
        'en-us': 'what is the name of the book',
        he: 'מה שם הספר  '
    }, bookPrice: {
        'en-us': 'what is the price of the book',
        he: 'מה מחיר הספר'
    }, addBookH2: {
        'en-us': 'You may add your book',
        he: 'תוסיף את הספר אחשלי'

    }
}
var gCurrLang = 'en-us'

function doTrans(lang) {
    setPriceByLang(lang)
    const els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const transKey = el.dataset.trans
        const txt = getTrans(transKey)
        el.innerText = txt
    })
}

function getTrans(transKey) {

    var key = gTrans[transKey]
    if (!key) return 'unknown'
    const translate = key[gCurrLang]
    if (!translate) return key[en]

    return translate
}

function setLang(lang) {
    gCurrLang = lang
}