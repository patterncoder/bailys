

module.exports = function singleMenuItemFix (jsonMenu) {
    
    _.forEach(jsonMenu.Menu.Sections.Section, function(section){
                if (section.MenuItems.MenuItem && !Array.isArray(section.MenuItems.MenuItem)) {
                    var singleMenuItem = section.MenuItems.MenuItem
                    section.MenuItems.MenuItem = [singleMenuItem];
                }
            });
    console.log(jsonMenu);
    return jsonMenu;
}