# Running Calendar Project

## Introduction

If you haven't read the README for the drawing calendar project I highly recommend reading that first as these projects build upon each other. 
I'll state again that this is serves my own needs and it's public to showcase work I've created.
As of writing this, the project is essentially done, I may come back to clean up somethings but no major changes.
In the last README I said no collaborations this is due to me wanting to work on other things, and I completely expect nobody to even request it, I just stated that in case lol. 

## Overview

This project is very similar to the drawing calendar and lot of it's design and core functionality was lifted from it.
Again I used Vite to initialize the project and handle the dev server, and vanilla JavaScript as the main language.
It uses File API but the format that's parsed is different:
Run One:
    - Date: 20XX-XX-XX
    - Mileage: XX.XX
    - Time: HH:MM:SS
    - Pace: XX'XX"

This project is handling more data, using the date to find the cells.
The mileage and time are used to calculate a effort score which really just represent the training load.
The pace was used to just display the best pace.
Less interesting design choices were made with no hardcoded start date or assumptions I complete a run daily.
My next project that builds off of this one will track my Blender progress and use TypeScript instead.