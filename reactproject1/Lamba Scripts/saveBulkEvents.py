#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Lambda function code to split bulk events from Maddie's schedule into individual events

This function will ingest the copied data from Maddies schedule from the API Gateway Put and split it into multiple calls to the already established saveScheduleEvent lambda function.

Author: Trenton Jeffries
Date: 2026-11-24
"""
import re
from datetime import datetime

def CheckTimeFormat(providedTime):
    if ':' in providedTime: return providedTime
    else: return providedTime.replace(" pm",":00 pm").replace(" am", ":00 am")

def PackageEventDict(year,month,day,times):
    timeSplit = re.split(" - ",times)
    startTime = CheckTimeFormat(timeSplit[0])
    endTime = CheckTimeFormat(timeSplit[1])
    
    tempScheduleEvent = {
        "startDate" : f"{year}-{month}-{day}",
        "startTime" : f"{startTime}",
        "endDate" : f"{year}-{month}-{day}",
        "endTime" : f"{endTime}",
        "eventTitle": "Maddie Work"
    }

    return tempScheduleEvent


with open(r"C:\Users\TJ\source\repos\reactproject1\reactproject1\Lamba Scripts\TestingData\schedule2.txt", "r", encoding="utf-8") as file:
    content = file.read()

content = content.replace("a.m.","am").replace("p.m.","pm")

while "\n\n" in content:
    content = content.replace("\n\n","\n")

splitDayData = re.split(r"Sat|Sun|Mon|Tue|Wed|Thu|Fri",content) #Splits data by day of week

#For determining the date if I am not given the schedule header
day = datetime.now().day 
month = datetime.now().month
year = datetime.now().year

eventList = []

for x in splitDayData:

    dayDataLBL = re.split(r"\n", x)#data line by line
    
    if "Not Scheduled" in dayDataLBL or dayDataLBL == ['']: continue 
    elif re.fullmatch(r"\d{2}/\d{2}/\d{4}", dayDataLBL[2]):#Handles the header if present
        print("In temp Data elif")
        tempDateData = re.split(r"/",dayDataLBL[2])
        month = tempDateData[0]
        year = tempDateData[2]

    else: #Through process of elimination we arrive at a day she is working
        if dayDataLBL[0] == 1: #covers changing month
            month += 1
            if month == 13:#covers changing year
                month = 1
                year += 1
        eventList.append(PackageEventDict(year,month,dayDataLBL[1],dayDataLBL[2])) #The work shift
        eventList.append(PackageEventDict(year,month,dayDataLBL[1],dayDataLBL[8])) #The lunch
        

print(eventList)

"""            startDate: requestBody.startDate || "",
            startTime: requestBody.startTime || "",
            endDate: requestBody.endDate || "",
            endTime: requestBody.endTime || "",
            isAllDay: requestBody.isAllDay || false,
            eventTitle: requestBody.eventTitle || "",
            eventDescription: requestBody.eventDescription || "",
            notificationReminder: requestBody.notificationReminder || true,"""
        
        