# tortedelini-guide-subscuribe

Subscribe to all Torte De Lini's guide for Dota 2.


# How to use it

*You use one of any option for the same result. I listed from easy to hard, choose the one you find it easy for you*

**#1st Option (All in one go - using developer console)**

*This work for 7.19 guides, may need some adjustment for next version. Please use other option for other version.*

1. Open and view the raw code for [add_all_guides.js](https://raw.githubusercontent.com/popiazaza/tortedelini-guide-subscuribe/master/add_all_guides.js).
2. Select all the raw code (`Ctrl + A`).
3. Copy all the selected raw code (`Ctrl + C`, or right-click and select `Copy`).
4. Navigate to [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30).
5. [Open developer console in your browser](https://webmasters.stackexchange.com/a/77337).
6. Paste the contents of [add_all_guides.js](https://raw.githubusercontent.com/popiazaza/tortedelini-guide-subscuribe/master/add_all_guides.js) that are copied in the step 3.
7. Press enter to run the code. Wait for it to finish, it may take a while.

**#2nd Option (Work on any Dota 2 guide workshop page - using bookmark)**

1. Open and view the raw code for [add_all_from_current_page_fav.js](https://raw.githubusercontent.com/popiazaza/tortedelini-guide-subscuribe/master/add_all_from_current_page_fav.js).
2. Select all the raw code (`Ctrl + A`).
3. Copy all the selected raw code (`Ctrl + C`, or right-click and select `Copy`).
4. Bookmark this page.
5. Edit the URL of the bookmark by right-clicking the new bookmark and selecting `Edit`. In the **URL** or **Location** field, paste the contents of [add_all_from_current_page_fav.js](https://raw.githubusercontent.com/popiazaza/tortedelini-guide-subscuribe/master/add_all_from_current_page_fav.js) that are copied in the step 3. You can change the **Name** field of the bookmark too, such as "Guide Subscribe"!
6. Navigate to [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30). (You could probably bookmark that too! :wink:)
7. Click the bookmarklet and it will subscribe all guides on that page.
8. Repeat step 6-7 on all guide pages.

**#3rd Option (Work on any Dota 2 guide workshop page - using developer console)**

1. Open and view the raw code for [add_all_from_current_page.js](https://raw.githubusercontent.com/popiazaza/tortedelini-guide-subscuribe/master/add_all_from_current_page.js).
2. Select all the raw code (`Ctrl + A`).
3. Copy all the selected raw code (`Ctrl + C`, or right-click and select `Copy`).
4. Navigate to [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30).
5. [Open developer console in your browser.](https://webmasters.stackexchange.com/a/77337)
6. Paste the contents of [add_all_from_current_page.js](https://raw.githubusercontent.com/popiazaza/tortedelini-guide-subscuribe/master/add_all_from_current_page.js) that are copied in the step 3.
7. Press enter to run the code. Wait for it to finish, it may take a while.
8. Repeat step 6-7 on all guide pages.

**#4th Option (Build new add_all_guides.js for advanced user - using developer console)**

1. Copy top partion code of  from [for_testing.js](https://raw.githubusercontent.com/popiazaza/tortedelini-guide-subscuribe/master/for_testing.js).

2. Navigate to [Torte de Lini\'s guide page](https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30).

3. [Open developer console in your browser.](https://webmasters.stackexchange.com/a/77337) and run this code.

4. Copy the console log and replace your first line of code with it

5. Open next guide page and run this code again until last page

6. Open [add_all_guides.js](https://raw.githubusercontent.com/popiazaza/tortedelini-guide-subscuribe/master/add_all_guides.js) and replace old guideList with your new guideList.

# Credits

Steamdb.info for base code: https://steamdb.info/freepackages/

WillsonHaw for how to: https://github.com/WillsonHaw/VacBanChecker/blob/master/README.md
