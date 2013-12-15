RPi-AppsScript-Christmas-Tree
=============================
Materials needed:
- Raspberry Pi with Python installed
- "GPIO" and "requests" modules for Python
- PowerSwitch Tail II (5V to 120V relay)
- 2 jumper wires


Setup

1. If you haven't already, install the "GPIO" module on your RPi:

from pi@raspberrypd ~ $

Test if you have it:

sudo python
import RPi.GPIO as GPIO

If you don't see an error, you're all set.  Otherwise install the module:

sudo apt-get update
sudo apt-get install python-rpi.gpio


2. If you haven't already, install the "requests" module on your RPi

sudo apt=get install python-requests

3. Go to Google Drive and add "Apps Script" to your Drive applications under "Create -> Connect more apps"

4. Create a standalone Apps Script and paste in the code for christmasTreeWebService.gs  
Publish this script as a web service (Publish -> Deploy as web app) to run as you, and to be accessible to anonymous users.
Copy the URL to your web app.

5. Create a text file for the Python code with a .py extension and put in the home directory on your Pi.  
Copy and paste the christmasTreeClient.py code into this file.  IMPORTANT:  Replace the <WEB APP URL> 
with your own web app url.

6.  Use jumpers to connect RPi pin 25 to the + in and the RPi ground pin to the - in contacts on the PowerSwitch tail.
Plug in 120V Christmas tree lights.

7. Run the python script as the root user (necessary if you want the I/O pins) and test the web app.

8. If you want the python program to resume on boot, set up a Cron job to run the program upon bootup..

See: http://www.raspberrypi-spy.co.uk/2013/07/running-a-python-script-at-boot-using-cron/





