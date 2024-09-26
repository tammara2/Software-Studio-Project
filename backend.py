#import necessary packages
import requests
import json
from datetime import datetime, timedelta
import numpy as np
import matplotlib.pyplot as plt
import os
import numpy as np

data_directory = 'nueva_site'

#function to ingest the data directly from the noaa site
def ingest_data():
    #download html from url
    url = 'https://gml.noaa.gov/ccgg/trends/monthly.html'
    # os.system('wget -O monthly.html '+url)
    # os.system('curl '+url+' > /Users/shedprinter/desktop/nueva_site/monthly.html')

    r = requests.get(url)
    with open('./monthly.html', 'wb') as f:
        f.write(r.content)

    #open html as a string
    with open('./monthly.html', 'r') as f:
        html = f.read()

    #parse through html file and identify the most recent value
    html_list = html.split('&nbsp;&nbsp; </td><td> ')
    for i in range(len(html_list)):
        html_list[i] = html_list[i].split(' ppm</td></tr>')[0]
    html_list = html_list[1:]
    for i in range(len(html_list)):
        html_list[i] = float(html_list[i])

    #open txt file, append the most recent value
    with open('./co2.txt', 'a') as f:
        f.write(str(html_list[0])+'\n')

#function to plot the data
def plot_data(data,days,filename,most_recent_co2):
    #define the x-tick label increment (in days, depending on number of days being plotted)
    if days == 30 or days == 60:
        step = 3
    elif days == 120:
        step = 6
    #plot the data
    plt.rcParams["font.family"] = "Comic Sans MS"
    fig = plt.figure()
    above_preindustrial = most_recent_co2-280
    plt.title('MLO Daily CO2 Concentration (ppm, last '+str(days)+' days) - '+str(round(above_preindustrial,2))+' ppm above pre-industrial')
    plt.ylabel('CO2 Concentration (ppm)')
    plt.xlabel('Days Ago')
    plt.xlim(0, days-1)
    plt.xticks(np.arange(0, days, step), np.arange(days, 0, -step))
    plt.plot(data)
    #plt.savefig('/Users//desktop/'+data_directory+'/images/'+filename, dpi=300, bbox_inches='tight')

ingest_data()

#read co2.txt as list using readlines
with open('./co2.txt', 'r') as f:
    data = f.readlines()
for d in range(len(data)):
    data[d] = float(data[d])

print(data)

max = max(data)
min = min(data)
print(min,max)

#trim data list to 30, 60, 120 days
one_hundred_twenty_data = data[-120:]
sixty_data = data[-60:]
thirty_data = data[-30:]

#fill the missing for all three lists with np.nan values
for i in range(120-len(one_hundred_twenty_data)):
    one_hundred_twenty_data.insert(0, float(np.nan))
for i in range(60-len(sixty_data)):
    sixty_data.insert(0, float(np.nan))
for i in range(30-len(thirty_data)):
    thirty_data.insert(0, float(np.nan))

#plot all the data
plot_data(one_hundred_twenty_data,120,'co2_120.png',data[-1])
plot_data(sixty_data,60,'co2_60.png',data[-1])
plot_data(thirty_data,30,'co2_30.png',data[-1])

#create pandas dataframe with all data
import pandas as pd
df = pd.DataFrame(data, columns=['co2'])
df.to_csv('/Users/shedprinter/desktop/'+data_directory+'/co2.csv')
#read co2.csv as string
with open('/Users/shedprinter/desktop/'+data_directory+'/co2.csv', 'r') as f:
    csv = f.read()
#find when data was most recently updated
current_day = datetime.now().strftime('%Y-%m-%d')
yesterday = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')

csv = 'days before '+yesterday+' '+csv
#write back to file
with open('/Users/shedprinter/desktop/'+data_directory+'/co2.csv', 'w') as f:
    f.write(csv)

#pull master branch
os.chdir('/Users/shedprinter/desktop/nueva_site/')
os.system('git pull')

file = open("/Users/shedprinter/desktop/nueva_site/src/pages/Dashboard.js","r")
text = file.read()
most_recent_ppm = text.split('monthlyVal="')[1].split(' ppm')[0]
text = text.replace('monthlyVal="'+most_recent_ppm+' ppm','monthlyVal="'+str(data[-1])+' ppm')
with open('/Users/shedprinter/desktop/nueva_site/src/pages/Dashboard.js', 'w') as f:
    f.write(text)

os.system('git checkout -b master')
os.system('git pull origin master')
os.system('git add *')
os.system('git commit -m "auto-push"')
os.system('git push origin master --force')

os.chdir('/Users/shedprinter/desktop/'+data_directory+'')
os.system('git checkout -b data')
os.system('git pull origin data')
os.system('git add *')
os.system('git commit -m "auto-push"')
os.system('git push origin data')
