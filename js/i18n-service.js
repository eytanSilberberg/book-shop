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