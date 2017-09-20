The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

The program adds "way" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iway

The program moves all of the first consecutive consonants to the end, and add "ay", for words beginning with one of more consonants
Example Input: water
Example Output: aterway

The program moves both "q" and "u" to the end if the word begins with "qu".
Example Input: quay
Example Output: ayquay

The program treats "y" as a consant if the word begins with a "y".
Example Input: you
Example Output: ouyay
