/**
 * Script for welcome.ejs
 */
document.getElementById('welcomeButton').addEventListener('click', e => {
    switchView(VIEWS.welcome, VIEWS.login)
    if(hasRPC){
        DiscordWrapper.updateDetails('Entrain d\'ajouter un compte...')
        DiscordWrapper.updateState('Configuration du launcher')
    }
})