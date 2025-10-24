=== All-In-One Image CAPTCHA Pro ===
Contributors: hookandhook
Tags: contact form 7, spam, captcha
Requires at least: 4.9
Requires PHP: 7.0
Tested up to: 6.8
Stable tag: 8.10.34

Adds a Honeypot and a clean image captcha to Contact Form 7 and Login/Registration forms. Images are made using Font Awesome's font icons.

== Description ==

Adds a honeypot and an image captcha to your contact form 7 forms by adding the shortcode [cf7ic] to the form editor where you want the captcha to appear. You can also add the image CAPTCHA to the login and registration form by enabling the feature in the Login Page Options. This plugin uses the Font Awesome font icon library to generate the images used in the captcha. Requires PHP 7+.

You can now add custom SVGs!
Simply install the plugin Safe SVG By Daryll Doyle, upload your SVGs to your Media Library, Enable SVGs through the plugin options and add your custom SVG icons through the Choose Default Icons option.

Along with this new option, you can also use a shortcode `[ai1ic-svg id="example"]` to pull in those SVG's into your theme. For Example, if you uploaded an SVG called blue-bird.svg and you wanted to use that SVG on your site, you would add this shortcode `[ai1ic-svg id="blue-bird"]`. Make sure you do not include `.svg` or the icon will not appear.

Some of the shortcode options are:
id: The SVG file name without `.svg`.
output: There are three options, `inline` will output the SVG code directly into the site which helps improve site performance by reduce network requests, `image` will place your SVG in an image tag, and `url` will output the svg src link if you prefer to add it to  your own image tag.
alt: Add your own image alt tag description, Example alt="Blue Bird".

= Features: =
* Simple to use settings page
* Custom text
* Full custom styling using our style generator
* New image CAPTCHA each time form is submitted
* Loads with ajax so as not to be cached by caching plugins
* Lazy loading added to reduce website load time
* Optional CAPTCHA for login screen
* Optional CAPTCHA for registration screen
* Customize the login/registration screen
* Gravity Froms support
* WordPress comments support

= Possible Future Features: =
* Customize the registration screen seperate from the login screen
* Other form support upon request

== Installation ==

1. Remove free version of Contact Form 7 Image CAPTCHA (if used)
2. Upload contents to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Activate plugin license by going to the cf7ic settings found in the contact menu 
4. Style your image CAPTCHA in the cf7ic settings page
5. Place `[cf7ic]` or `[cf7ic "toggle"]` to your contact form 7 forms

== Frequently Asked Questions ==

= How do you change the settings? =

The settings can be found in the "All-In-One Image CAPTCHA" link in the admin sidebar, it can also be found under the Contact Form 7 menu "Contact -> Image CAPTCHA" and under "Appearence -> Login Screen".

= How do you add the image captcha to a Contact Form 7 form? =

Add this shortcode `[cf7ic]` to your contact form 7 form, generally right before the submit button.

= How do I activate the toggle? =

Simply add `"toggle"` to the shortcode `[cf7ic "toggle"]` within your contact form

= How do I enable the image CAPTCHA on the login screen? =

In the Login Page Options tab, check the check box (first option in that tab) then save the options.

== Changelog ==
= 8.10.21 =
[07/18/2023]
* Fixed PHP error shown on the comments form when submitting a comment without selecting an icon

= 8.10.20 =
[06/08/2023]
* Added Blogus theme support for image CAPTCHA used in comments section

= 8.10.19 =
[04/19/2023]
* Language support: Corrected Turkish file name

= 8.10.18 =
[04/18/2023]
* Language support: Added Turkish

= 8.10.17 =
[01/26/2023]
* Fixed bug introduced by Contact Form 7 version 5.7.3 which prevented the CAPTCHA from rendering. Thanks @patrick1994 for providing the fix. 

= 8.10.16 =
[01/12/2023]
* Bugfix: Corrected critical error which occured when using the login CAPTCHA with no other plugins installed 
* Language support: Added French (Canada)

= 8.10.15 =
[09/26/2022]
* Automatically disable the login CAPTCHA if the plugin Wordfence Login Security is enabled. This resolves an issue where 2FA interferes with the login validation function used by the Image CAPTCHA.

= 8.10.14 =
[09/01/2022]
* Fixed issue where validation errors were not showing due to the Contact Form 7 version 5.6 update

= 8.10.13 =
[06/01/2022]
* New: You can now disable the CAPTCHA for logged in users
* Enhancement: Added new option Box Margin Bottom to set the spacing between the CAPTCHA and the submit button
* Bugfix: Added FontAwesome font to dashboard to fix issue with the "Choose Default Icons" settings which prevented people from modifying their options after saving their selected icons.
* Bugfix: Fixed styling issue with CAPTCHA on WPForms
* Bugfix: Fixed ajax issue wtih WPForms
* Language support: Updated Polish language

= 8.10.12 =
[01/20/2022]
* Language support: Added German (Austria) or Deutsch (Österreich)
* Language support: Added German (Switzerland) or Deutsch (Schweiz)
* Bugfix: Additinal code corrections for the JavaScript Uncaught TypeError issue, as reported in support ticket #7891

= 8.10.11 =
[01/14/2022]
* Bugfix: Resolved language path error for WordPress installations using alternative file paths, as reported in support ticket #7891

= 8.10.10 =
[12/09/2021]
* Bugfix: Resolved JavaScript Uncaught TypeError issue, as reported in support ticket #7891

= 8.10.9 =
[11/15/2021]
* Language: Additional corrections to Spanish translation

= 8.10.8 =
[11/04/2021]
* Bugfix: The Image CAPTCHA now works in login forms that load in popup boxes, but it requires that you check the `Disable Lazy Load (Ajax)` option on the Image CAPTCHA plugin settings page.
* Bugfix: Added missing screen reader instructions when the default instructions are used
* 3rd party compatibility: Theme support added for the Riode theme
* Language: Additional corrections to Spanish translation

= 8.10.7 =
[10/29/2021]
* Language: Corrected Spanish translation errors

= 8.10.6 =
[10/13/2021]
* Language: Corrected Spanish translation errors

= 8.10.5 =
[10/08/2021]
* Language: Updated German (formal), capitalized nouns

= 8.10.4 =
[10/04/2021]
* Plugin support: Minor update to fix multi-step checkout process when using Germanized for WooCommerce Pro By vendidero

= 8.10.3 =
[09/29/2021]
* Language support: Minor update to French language

= 8.10.2 =
[09/17/2021]
* Language support: Updated Greek language

= 8.10.1 =
[09/01/2021]
* Enhancement: Added Toggle option to Gravity Forms Image CAPTCHA field
* Enhancement: Changed versioning system from one decimal (1.0) to two decimals (1.0.0) for better clarity on the type of update
* Bugfix: Corrected issue where toggle would not work if ajax is disabled
* Bugfix: Corrected issue where the stylesheet was no longer loading on the login page

= 8.10 =
[08/30/2021]
* Enhancement: Updated the Changelog versioning numbers for minor updates
* Bugfix: Fixed undefined PHP variables
* Bugfix: Fixed French language translation not loading
* Language: German updates, capitalized nouns, and reverted some strings to previous version

= 8.9 =
[08/28/2021]
* Bugfix: Corrected a bug in the JavaScipt that appeared in version 8.7 which was reported only moments after I released version 8.8

= 8.8 =
[08/27/2021]
* Enhancement: Updated default CAPTCHA styling to reduce the spacing when CAPTCHA drops to two lines of text
* Enhancement: Translated additional text in plugin settings.
* Bugfix: Corrected FOUT issue where the CAPTCHA would appear unstyled in Graviy Forms for a second causing the CAPTCHA to flash
* Bugfix: Corrected translation change from version 8.7 which broke the translations unless you had the free version of the plugin installed

= 8.7 =
[08/26/2021]
* Improvement: Changed last remaining jQuery code to plain JavaScipt for those who wish to remove the jQuery library from the front of their site. Contact Form 7 is currently the only form plugin that does not require jQuery.
* Bugfix: Corrected translation issue where validation text would not be translated on multilingual sites.
* Bugfix: Corrected translation issue where text would change back to default language on translated pages when Ajax was active on multilingual sites.
* Bugfix: Corrected issue where CAPTCHA could not be solved after the first attempt if AJAX was disabled

= 8.6 =
[07/28/2021]
* Improvement: Added a Documentation tab to the All-In-One Image CAPTCHA settings page
* Bugfix: The [cf7ic] shortcode can now be placed anywhere in the CF7 form, prior to this, if the shortcode was placed on the top of the form above all other fields, the validation would not trigger
* Bugfix: Prevented login screen styling from changing if CAPTCHA is not enabled on login screen
* Bugfix: Corrected several undefined variable PHP Notices
* Improvement: Cleaned up some styling issues in the CAPTCHA Options and Login Page Options screen

= 8.5 =
[07/09/2021]
* New: Added basic WPForms support. You can now enable the Image CAPTCHA on all WPForms by checking the "Enable CAPTCHA for WPForms." checkbox in the CAPTCHA Options under "Other Forms". I plan on expanding the settings for WPForms in future releases to selectively choose which WPForms you wish to include the CAPTCHA on, as well as include options to enable the toggle function to hide the CAPTCHA by default for WPForms.

= 8.4 =
[06/08/2021]
* Fixed: Updated login authentication code to work with Two Factor Authentication functions (2FA)
* Fixed: Changed Greek langauge file name so it will work correctly

= 8.3 =
[05/21/2021]
* Fixed: Corrected issue with the Gravity Forms validation which prevented the CAPTCHA from working correctly on Gravity Forms using multi-step form layouts
* Improvement: Disabled autocomplete on honeypot fields to help reduce false positives
* Language support: Added Greek translation

= 8.2 =
[05/12/2021]
* Fixed: Corrected issue with toggle which prevented it from working correctly
* Improvement: re-built the toggle jQuery function with plain JavaScript and moved it into the JavaScript file removing it from being inline jQuery

= 8.1 =
[05/06/2021]
* Fixed: Corrected issue where the comment form was ignoring the comment settings and posting comments right away
* Fixed: Corrected issue where the CAPTCHA validation was being run even when the CAPTCHA was disabled for comments

= 8.0 =
[04/29/2021]
* NEW: SVG support has been added to allow you to add your own custom icons, improve speed, reduce webpage size, and make it harder for bots to solve the CAPTCHAs
* NEW: You can now deactivate your license directly from the site
* NEW: Auto-update function now available
* Improvement: Added admin notices to license activation process
* Improvement: Cleaned up the Register Plugin License page
* Improvement: The plugin no longer requires jQuery on the front end of the site, all jQuery functions have been switched out with plain JavaScript
* Improvement: Made minor JavaScript changes to the settings page
* Improvement: Made minor changes to the styles
* Improvement: Updated license activation functions to be more reliable
* Improvement: Updated the plugin update function to be more reliable
* Fixed: Corrected issue that prevented license activation
* Fixed: Corrected CAPTCHA's HTML output by removing an unnecessary nested paragraph tag which was causing extra spaces

= 7.6 =
[03/17/2021]
* Fixed issue that added empty paragraph tags before and after the CAPTCHA

= 7.5 =
[03/12/2021]
* Changed some jQuery functions for plain JavaScript in a step towards not relying on the jQuery library for those who wish to run a site wihout jQuery now that Contact Form 7 has removed its dependency on that library.
* Added option to turn off honeypots
* Fixed issue where extra paragraph tags were being generated between the CAPTHCA and the validation message
* Fixed PHP warning by changing `wp_localize_script` to `wp_add_inline_script`

= 7.4 =
[02/24/2021]
* NEW: Basic support added for the default unaltered WordPress comment form. The CAPTCHA may not work on comment forms that have been altered to use ajax or that have been altered to show additional fields, full support to come.
* Changed plugin name to All-In-One Image CAPTCHA
* Changed the value of the reverse honeypot field from Captain Benjamin Sisko to a random string for added security
* Fixed bug introduced by Contact Form 7 version 5.4

= 7.3 =
[11/18/2020]
* NEW: Added support for the default WordPress Lost Password page
* BUGFIX: Fixed an issue with the registration function which prevented the plugin from registering the site from the plugin options. 

= 7.2 =
[11/14/2020]
* FIX: corrected database creation function which failed to create a new database table on older versions of MySQL which produced the following error in the error logs: Specified key was too long; max key length is 767 bytes.

= 7.1 =
[11/13/2020]
* FIX: corrected a bug with the reverse honeypot where form was unable to submit on the second try

= 7.0 =
[11/13/2020]
* NEW: Gravity Forms suport added after merging in the Gravity Forms Image CAPTCHA 
* Improvement: This plugin is now ADA/a11y compliant with the addition of screen reader support. Previously this plugin only provided keyboard accessiblity.
* Improvement: Added a reverse honeypot that checks for human interaction on a page, this will protect against bots that auto fill forms. This will not interfere with human triggered auto fill form functions since you are still required to select the correct icon.
* Improvement: Updated current honeypot fields to be more "enticing" to bots
* Improvement: Added an additonal validation check to protect against bots programed to bypass the All-in-one Image CAPTCHA by submitting previous correct hashed answers
* Improvement: Cleaned up Register Plugin License tab
* Fix: Corrected a bug in the Registration settings that cleared CAPTCHA Options when a license is saved
* Refactored code
* Added Polish translation

= 6.9 =
[10/22/2020]
* FIX: Corrected broken translation line for Spanish (es)

= 6.8 =
[09/02/2020]
* NEW: You can now add the Image CAPTCHA to the WooCommerce login and registration forms when activated through the CAPTCHA Options page.
* Updated all translation files to include WordPress and WooCommerce login and registration captcha error messages

= 6.7 =
[08/10/2020]
* Added theme support for the "tm housepress" theme by "Template Monster"

= 6.6 =
[06/17/2020]
* NEW: You can now add an Image CAPTCHA to the registration form when turned on through the Login Page Options.
* Added language support for Deutsche (Sie) - Thanks Sandro Lucifora
* Added wpml-config file - Thanks Sandro Lucifora

= 6.5 =
[05/25/2020]
* Fixed a PHP warning

= 6.4 =
[05/23/2020]
* Fixed a bug for PHP version 7.2 (I was working on the plugin in PHP 7.3)

= 6.3 =
[05/23/2020]
* Full compatability for "Contact Form 7 Conditional Fields" by Jules Colle. Conditional Fields had been an ongoing issue for this plugin for a while now due to how CF does their validations, however I was finally able to come up with a solution that will allow this plugin to function normally with CF installed.

= 6.2 =
* Fixed registration issue
* Fixed problem where on some sites, autofill would fill in one of the honeypot fields

= 6.1 =
* Fixed issue where some themes were overriding the FontAwesome font which prevented the icons from appearing

= 6.0 =
* Included WP Login Image CAPTCHA functionality as part of our move towards changing Contact Form 7 Image CAPTCHA to the All-In-One Image CAPTCHA plugin
* Refactored code
* Added a Settings link to the plugin's quick links on the plugins page

= 5.5 =
* Fixed issue where captcha image label was being changed from inline block to block by some themes

= 5.5 =
* Added Czech translation
* Added class to CAPTCHA instruction text
* Fixed Italian language file extensions

= 5.4 =
* Fixed toggle bug: If you have multiple forms on a page with toggle active, only the form focused on will show the icons. (Thanks Bastian Böhm)
* Updated car in Mexican translation file from coches to carro

= 5.3 =
* Fixed compatibility issue with themes where label width is set to 100% which caused icons to appear vertically

= 5.2 =
* Fixed compatibility issue with "Contact Form 7 Conditional Fields" by Jules Colle... again

= 5.1 =
* Fixed php count() error
* Added Dutch translation
* Added Portuguese (Portugal) translation
* Added Spanish (ES) translation
* Added Persian translation
* Updated German translation

= 5.0 =
* Improved honeypot for better spam protection from bots
* Added option to select number of icons you wish to display (more icons makes it harder for bots to guess)
* Added Icon Title Style options (bold, italic, bold/italic)
* Moved Icon Title Color from Icon Style section to Text Styling section 
* Made CAPTCHA keyboard accessible
* Added back missing styles for the plugin's admin options page
* Fixed minor php errors
* Refactored options page code
* Added back code to make plugin compatible with "Contact Form 7 Conditional Fields" by Jules Colle. NOTE for sites with conditional fields installed: For the time being ALL your forms will need the Image CAPTCHA shortcode to work, otherwise your form will fail to send.
* Added option to turn off ajax loading

= 4.0 =
* Refactored code
* Image CAPTCHA refresh function now works with caching plugins
* Lazy loading added to reduce website load time 

= 3.8 =
* Added Russian translation

= 3.7 =
* Fixed styling bug that broke payment form
* Moved the backend plugin settings styling from the frontend stylesheet to its own backend stylesheet
* Added Italian language support

= 3.6 =
* Now compatible with "Smart Grid-Layout Design for Contact Form 7" by Aurovrata V.

= 3.5 =
* Added some default styling to account for themes or plugins that change font icons to SVG's

= 3.4 =
* Now compatible with "Contact Form 7 Conditional Fields" by Jules Colle

= 3.3 =
* Added custom error messaging

= 3.2 =
* Fixed problem with icon size not changing when set on settings page

= 3.1 =
* Fixed toggle which broke in version 3.0

= 3.0 =
* Image CAPTCHA now refreshes after each submission
* Improved the spam protection by changing answeres to hashes to make it harder to spoof by bots

= 2.7 =
* Added function to deactivate free version on activation if free version is present and currently active
* Made function names unique to avoid conflict with free version

= 2.6 =
* NEW: Added toggle functionality to hide CAPTCHA until form is interacted with [cf7ic "toggle"]

= 2.5 =
* Made small style change to icons to prevent themes from overwriting the font size

= 2.4 =
* Made FontAwesome library local to make plugin GDPR compliant
* Fixed deprecated contact form 7 tag
* Fixed php notices
* Fixed styling issue in settings panel

= 2.3 =
* Fixed styling issue in settings panel where labels for colors were not displaying properly

= 2.2 =
* NEW: Added custom icon support, you can now add any icon available in FontAwesome

= 2.1 =
* Fixed custom message bug

= 2.0 =
* Refactored code
* Improved method to include style sheet so its only included when plugin is in use.
* Fixed validation message, you will now see "Please select an icon." when icon is not selected on submit and "Please select the correct icon." when the wrong icon was selected on submit.

= 1.2.1 =
* Fixed spacing issue with the text in the Image CAPTCHA box

= 1.2 =
* Updated supported tag
* Added Spanish translation

= 1.1 =
* Bug fix: Added missing prefix to the spam check function

= 1.0 =
* Initial Release
