
<h1 align="center">
  Gatsby Site with Pokedex Searcher!
</h1>

## 🚀 Quick start

1. **Requirements & constraints**
    To run the site, you need the to install the following plugins:
    ```shell

    npm install -g gatsby-cli
    ```
    ```shell

    npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem
    
    ```
    ```shell

    npm install redux react-redux
    ```

    ```shell

    npm install gatsby-plugin-mdx @mdx-js/mdx@v1 @mdx-js/react@v1
    ```

2.  **Run the Gatsby site**

    Run the Gatsby site by switching to the folder and running the following command:

    ```shell
   
    gatsby develop
    ```

3.  **Navigating the site**

    Go to your local host and you will see the site. Simply click the links to navigate to different pages.

   

4.  **Navigating the PokeDex**

    - To get to the PokeDex, simply click the 'All Pokemon' tab of the website.
    - The <img src="https://github.com/HaydenMichael47/Gatsby-site/tree/main/Screenshots/PokedexPage.PNG" alt="Pokedex" title="Pokedex"> lists all the original 151 Pokemon in a list with their name and sprite.
    
    
    - This is done in the 'gatsby-node.js' file.
    - To search for specific Pokemon, start typing the name of the Pokemon in the search bar, and it will automatically update with related Pokemon.
    - If there are none, the page will be blank and you have to remove the text from the search bar.
    - To see more information on a particular Pokemon, click the sprite or their name, and you will be taken to a different page with stat information for that particular Pokemon.
    

5. **Within a Pokemon's page**
    - Inside a <img src="https://github.com/HaydenMichael47/Gatsby-site/tree/main/Screenshots/PokemonPage.PNG" alt="Pokemon's page" title="Pokemon's page"> is information specifically about the Pokemon
    - This information includes Name, Sprite, Height, Weight, Type(s), and fighting stats
    - The fighting stats are arranged on a pie chart based on the number the stat represents
    - To return to the page to search for more pokemon, click the 'Return to all Pokemon' link under the pie chart

6. **How to see a build of the Site**
    - To see a build of the site, follow this link to see a build on github pages: https://haydenmichael47.github.io/Gatsby-site/
    - There were some complications involving the amount of amount of pokemon pages that can be built, so this build is limited to 8 pokemon to see how it works.
    - I am currently looking into what might be causing the issue.
    
    - The intended build can be viewed from this Gatsby cloud link: https://build-62e6fe20-bb8f-4e81-aac5-5c9d92705695.gtsb.io/

    


