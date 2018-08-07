import $ from 'jquery'

const loadHtmlSuccessCallback = []

export function onLoadHtmlSuccess(callback) {
    if (!loadHtmlSuccessCallback.includes(callback)) {
        loadHtmlSuccessCallback.push(callback)
    }
}

function loadInclude(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallback.forEach(callback => callback(data))
                loadInclude(e)
            }
        })
    })
}

loadInclude();