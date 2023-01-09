/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`http://nl.tommy.com/${path}`)
    }

    /**
     * checking for an element to exist with a return value
     * @param selector 
     * @returns 
     */
    public checkIfElementExists = (selector) => {
        try {
          return $(selector).isExisting();
        } catch (error) {
          return false;
        }
      };

}
export default new Page();

