import requests
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setup(25, GPIO.OUT)


//Important: replace with the Apps Script web app URL
baseUrl = "<WEB APP URL>";


while True:
  state = requests.get(baseUrl + "?raspberry=true").text
  print state
  if (state == "on"):
    GPIO.output(25, GPIO.HIGH)
  if (state == "off"):
    GPIO.output(25, GPIO.LOW)
  time.sleep(1)﻿
