# Steam Guide Subscribe All

![Steam Guide Subscribe All](https://raw.githubusercontent.com/popiazaza/Steam-Guide-Subscribe-All/master/Steam-Guide-Subscribe-All.jpg)

Subscribe to all Steam's guide in the page, like Torte De Lini's guides for Dota 2.

For other workshop items, you can use [Augmented Steam](https://augmentedsteam.com/) instead.

> Previously known as **tortedelini-guide-subscuribe** (that typo) or **Dota 2 Workshop Guide 1 click subscribe**

## How to use

1. Install [Violentmoney](https://violentmonkey.github.io/),  [Tampermonkey](https://www.tampermonkey.net/) or any other userscript manager.

> **Warning:** [Greasemonkey](https://www.greasespot.net/) may not work.

2. Open and view the raw code for [Steam-Guide-Subscribe-All.user.js (Github)](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/Steam-Guide-Subscribe-All.user.js) or [Steam-Guide-Subscribe-All.user.js (Greasyfork)](https://greasyfork.org/en/scripts/372234-dota-2-workshop-guide-auto-subscribe/code/Steam-Guide-Subscribe-All.user.js).

3. Click the `Install` button.

4. Navigate to any guide workshop page you like. For example, [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30).

5. There should be new buttons on the right section of the page, click it and it will subscribe all guides on that page.

## [ARCHIVED, OLD WAY] Mannual Guide for Torte de Lini\'s guide

*You use one of any option for the same result. I listed from easy to hard, choose the one you find it easy for you*

### 1st Option (All in one go - using developer console)**

*This work for 7.19 guides, may need some adjustment for next version. Please use other option for other version.*

1. Open and view the raw code for [add_all_guides.js](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/add_all_guides.js).
2. Select all the raw code (`Ctrl + A`).
3. Copy all the selected raw code (`Ctrl + C`, or right-click and select `Copy`).
4. Navigate to [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30).
5. [Open developer console in your browser](https://webmasters.stackexchange.com/a/77337).
6. Paste the contents of [add_all_guides.js](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/add_all_guides.js) that are copied in the step 3.
7. Press enter to run the code. Wait for it to finish, it may take a while.

### 2nd Option (Work on any Dota 2 guide workshop page - using bookmark)**

1. Open and view the raw code for [add_all_from_current_page_fav.js](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/add_all_from_current_page_fav.js).
2. Select all the raw code (`Ctrl + A`).
3. Copy all the selected raw code (`Ctrl + C`, or right-click and select `Copy`).
4. Bookmark this page.
5. Edit the URL of the bookmark by right-clicking the new bookmark and selecting `Edit`. In the **URL** or **Location** field, paste the contents of [add_all_from_current_page_fav.js](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/add_all_from_current_page_fav.js) that are copied in the step 3. You can change the **Name** field of the bookmark too, such as "Guide Subscribe"!
6. Navigate to [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30) or any guide workshop page you like. (You could probably bookmark that too! :wink:)
7. Click the bookmarklet and it will subscribe all guides on that page.
8. If there is more than one page, go to the next page and repeat step 7.

### 3rd Option (Work on any Dota 2 guide workshop page - using developer console)**

1. Open and view the raw code for [add_all_from_current_page.js](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/add_all_from_current_page.js).
2. Select all the raw code (`Ctrl + A`).
3. Copy all the selected raw code (`Ctrl + C`, or right-click and select `Copy`).
4. Navigate to [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30) or any guide workshop page you like.
5. [Open developer console in your browser.](https://webmasters.stackexchange.com/a/77337)
6. Paste the contents of [add_all_from_current_page.js](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/add_all_from_current_page.js) that are copied in the step 3.
7. Press enter to run the code. Wait for it to finish, it may take a while.
8. If there is more than one page, go to the next page and repeat step 6-7.

### 4th Option (Build new add_all_guides.js for advanced user - using developer console)**

1. Copy top partion code of  from [for_testing.js](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/for_testing.js).

2. Navigate to [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30).

3. [Open developer console in your browser.](https://webmasters.stackexchange.com/a/77337) and run this code.

4. Copy the console log and replace your first line of code with it

5. Open next guide page and run this code again until last page

6. Open [add_all_guides.js](https://github.com/popiazaza/Steam-Guide-Subscribe-All/raw/master/add_all_guides.js) and replace old guideList with your new guideList.

# Credits

Steamdb.info for base code: https://steamdb.info/freepackages/

WillsonHaw for how to: https://github.com/WillsonHaw/VacBanChecker/blob/master/README.md

# License

MIT License