#!/usr/bin/env python
# coding: utf-8

# In[435]:


import datetime
import pandas as pd
import numpy as np
from datetime import timedelta
import datetime


# In[436]:
def setting_path(file):
    data_from_site = pd.read_csv(file)


    # In[437]:


    data_from_site.loc[data_from_site['start_point'] == "точка в Баренцевом море", 'start_point'] = 0
    data_from_site.loc[data_from_site['start_point'] == "точка в Баренцевом море ", 'start_point'] = 0
    data_from_site.loc[data_from_site['start_point'] == "Сабетта 1", 'start_point'] = 13
    data_from_site.loc[data_from_site['start_point'] == "Сабетта 2", 'start_point'] = 12
    data_from_site.loc[data_from_site['start_point'] == "Сабетта 3", 'start_point'] = 10
    data_from_site.loc[data_from_site['start_point'] == "Сабетта 1 ", 'start_point'] = 13
    data_from_site.loc[data_from_site['start_point'] == "Сабетта 2 ", 'start_point'] = 12
    data_from_site.loc[data_from_site['start_point'] == "Сабетта 3 ", 'start_point'] = 10
    data_from_site.loc[data_from_site['start_point'] == "Саббета 1", 'start_point'] = 13
    data_from_site.loc[data_from_site['start_point'] == "Саббета 2", 'start_point'] = 12
    data_from_site.loc[data_from_site['start_point'] == "Саббета 3", 'start_point'] = 10
    data_from_site.loc[data_from_site['start_point'] == "Саббета 1 ", 'start_point'] = 13
    data_from_site.loc[data_from_site['start_point'] == "Саббета 2 ", 'start_point'] = 12
    data_from_site.loc[data_from_site['start_point'] == "Саббета 3 ", 'start_point'] = 10

    data_from_site.loc[data_from_site['end_point'] == "точка в Баренцевом море", 'end_point'] = 0
    data_from_site.loc[data_from_site['end_point'] == "точка в Баренцевом море ", 'end_point'] = 0
    data_from_site.loc[data_from_site['end_point'] == "Сабетта 1", 'end_point'] = 13
    data_from_site.loc[data_from_site['end_point'] == "Сабетта 2", 'end_point'] = 12
    data_from_site.loc[data_from_site['end_point'] == "Сабетта 3", 'end_point'] = 10
    data_from_site.loc[data_from_site['end_point'] == "Сабетта 1 ", 'end_point'] = 13
    data_from_site.loc[data_from_site['end_point'] == "Сабетта 2 ", 'end_point'] = 12
    data_from_site.loc[data_from_site['end_point'] == "Сабетта 3 ", 'end_point'] = 10
    data_from_site.loc[data_from_site['end_point'] == "Саббета 1", 'end_point'] = 13
    data_from_site.loc[data_from_site['end_point'] == "Саббета 2", 'end_point'] = 12
    data_from_site.loc[data_from_site['end_point'] == "Саббета 3", 'end_point'] = 10
    data_from_site.loc[data_from_site['end_point'] == "Саббета 1 ", 'end_point'] = 13
    data_from_site.loc[data_from_site['end_point'] == "Саббета 2 ", 'end_point'] = 12
    data_from_site.loc[data_from_site['end_point'] == "Саббета 3 ", 'end_point'] = 10


    # In[438]:


    data_from_site["start"][33] = "16.01.2021 12:30"
    data_from_site["end"][34] = "01.02.2021 23:30"


    # In[439]:


    for i in range(len(data_from_site)):
        data_from_site["start"][i] = datetime.datetime.strptime(data_from_site["start"][i], "%d.%m.%Y %H:%M")
        data_from_site["end"][i] = datetime.datetime.strptime(data_from_site["end"][i], "%d.%m.%Y %H:%M")


    # In[440]:


    graph = {
        0: {
            1: {'distance': 802.3844775732041,
                'speed_limit': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
            },
            5: {'distance': 672.2298286650752,
                'speed_limit': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
            }
        },
        1:  {
            0: {'distance': 802.3844775732041,
                'speed_limit': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
            },
            2: {'distance': 594.2540890772044,
                'speed_limit': [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5]
            }
        },
        2:  {
            1: {'distance': 594.2540890772044,
                'speed_limit': [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5]
            },
            3: {'distance': 370.12977626198835,
                'speed_limit': [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6]
            }
        },
        3:  {
            2: {'distance': 370.12977626198835,
                'speed_limit': [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6]
            },
            4: {'distance': 201.9950962300714,
                'speed_limit': [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6]
            },
            6: {'distance': 111.7413453491566,
                'speed_limit': [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7]
            }
        },
        4:  {
            3: {'distance': 201.9950962300714,
                'speed_limit': [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6]
            },
            5: {'distance': 962.4130145654461,
                'speed_limit': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2]
            }
        },
        5:  {
            4: {'distance': 962.4130145654461,
                'speed_limit': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2]
            },
            0: {'distance': 802.3844775732041,
                'speed_limit': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
            }
        },
        6:  {
            3: {'distance': 111.7413453491566,
                'speed_limit': [1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7]
            },
            7: {'distance': 62.52612185246047,
                'speed_limit': [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7]
            }
        },
        7:  {
            6: {'distance': 62.52612185246047,
                'speed_limit': [1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7]
            },
            8: {'distance': 76.98144452489322,
                'speed_limit': [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8]
            }
        },
        8:  {
            9: {'distance': 27.755861003897596,
                'speed_limit': [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8]
            },
            7: {'distance': 76.98144452489322,
                'speed_limit': [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8]
            }
        },
        9:  {
            8: {'distance': 27.755861003897596,
                'speed_limit': [2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8]
            },
            10: {'distance': 27.456556499021453,
                'speed_limit': [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
            },
            11: {'distance': 50.741262742082476,
                'speed_limit': [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
            }
        },
        10:  {
            9: {'distance': 27.456556499021453,
                'speed_limit': [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
            }
        },
        11:  {
            9: {'distance': 50.741262742082476,
                'speed_limit': [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
            },
            12: {'distance': 27.072802307045126,
                'speed_limit': [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
            },
            13: {'distance': 47.852922434718344,
                'speed_limit': [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 9]
            }
        },
        12:  {
            11: {'distance': 27.072802307045126,
                'speed_limit': [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
            }
        },
        13:  {
            11: {'distance': 47.852922434718344,
                'speed_limit': [3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 9]
            }
        }
    }


    # In[441]:


    def find_all_paths(graph, start, end, path=[]):
        path = path + [start]
        if start == end:
            return [path]
        if start not in graph:
            return []
        paths = []
        for node in graph[start]:
            if node not in path:
                new_paths = find_all_paths(graph, node, end, path)
                for new_path in new_paths:
                    paths.append(new_path)
        return paths

    def get_time(distance, speed, icelimint):
        return distance / speed * (1 - icelimint * 0.07)

    def get_time_way(start_node, end_node, speed_sud, data_start, class_sud):
        all_paths = find_all_paths(graph, start_node, end_node)
        
        day = data_start.day - 1
        if day == 30:
            day = 29
        
        data_way = list()
        for path in all_paths:
            time_way = data_start.hour + (data_start.minute / 60)
            cheack_time = data_start.hour + (data_start.minute / 60)
            date_ice = day
            data_icelimint = list()
            for cords in range(len(path)-1):
                distance = graph[path[cords]][path[cords+1]]['distance']
                if int(cheack_time/24) > 0:
                    date_ice = date_ice + 1 
                    cheack_time = cheack_time - 24
                    if date_ice == 30:
                        date_ice = 1

                icelimint = graph[path[cords]][path[cords+1]]['speed_limit'][date_ice]
                data_icelimint.append(icelimint)
                time_way += get_time(distance, speed_sud, icelimint)
                cheack_time += get_time(distance, speed_sud, icelimint)
            data_way.append([time_way, data_icelimint, path])

        data_way = sorted(data_way, key=lambda x: x[0])
        new_data_way = list()
        

        for item in data_way:
            data = item.copy()
            if 0 <= max(item[1]) <= 3:
                data.append(0)
                new_data_way.append(data)
            elif 4 <= max(item[1]) <= 6:
                if class_sud in ["No ice class", "Ice1", "Ice2", "Ice3"]:
                    data.append(1)
                    new_data_way.append(data)
                else:
                    data.append(0)
                    new_data_way.append(data)
            elif 7 <= max(item[1]) <= 10:
                if class_sud in ["No ice class", "Ice1", "Ice2", "Ice3"]:
                    data.append(2)
                    new_data_way.append(data)
                elif class_sud in ["Arc7", "Arc8", "Arc9"]:
                    data.append(1)
                    new_data_way.append(data)
                else:
                    data.append(0)
                    new_data_way.append(data)
        
        return [[i[0], i[2], i[3]]for i in new_data_way]

    def ledokol_time_way(point_start, poitn_end):
        all_paths = find_all_paths(graph, point_start, poitn_end)
        speed = 9

        ledokol_time = list()

        for path in all_paths:
            time_way = 0
            for cords in range(len(path)-1):
                distance = graph[path[cords]][path[cords+1]]['distance']
                time_way += distance / speed
            ledokol_time.append([time_way, path])
        
        ledokol_time = sorted(ledokol_time, key=lambda x: x[0])
        return ledokol_time[0]


    # In[442]:


    index_delete = list()
    for item in range(len(data_from_site)):
        way_data = get_time_way(data_from_site['start_point'][item], data_from_site['end_point'][item], data_from_site['Скорость'][item],
                                (data_from_site['start'][item]), data_from_site['Ледовый класс'][item])
        
        time_start = data_from_site['start'][item]
        time_end = data_from_site['end'][item]
        
        for path in way_data:
            predict_time = time_start + timedelta(hours=path[0]) - timedelta(hours=48)
            if all([predict_time <= time_end, path[-1] == 0]):
                index_delete.append(item)
                break


    # In[443]:


    data_for_push = list()


    # In[444]:


    for item in index_delete:
        way_data = get_time_way(data_from_site['start_point'][item], data_from_site['end_point'][item], data_from_site['Скорость'][item],
                                (data_from_site['start'][item]), data_from_site['Ледовый класс'][item])

        time_start = data_from_site['start'][item]
        time_end = data_from_site['end'][item]
        
        for path in way_data:
            predict_time = time_start + timedelta(hours=path[0]) - timedelta(hours=48)
            if all([predict_time <= time_end, path[-1] == 0]):
                data_for_push.append([data_from_site['Наименование'][item], data_from_site['IMO'][item],
                                    data_from_site['Ледовый класс'][item], data_from_site['Скорость'][item],
                                    time_start.strftime('%Y-%m-%d %H:%M:%S'), predict_time.strftime('%Y-%m-%d %H:%M:%S'), path[1]])
                break


    # In[445]:


    data_from_site = data_from_site.drop(index_delete).reset_index(drop=True)


    # In[446]:


    data_from_site


    # In[447]:

    l = len(df['IMO'])*4 # Длина бота
    bot = np.load('bot_2.npy')
    ledokol_start_with = list()
    for i in range(l//4):
        if bot[i] >= 0:
            ledokol_start_with.append([1,bot[i]])
    for i in range(l//4,l//2):
        if bot[i] >= 0:
            ledokol_start_with.append([2,bot[i]])
    for i in range(l//2,l//4*3):
        if bot[i] >= 0:
            ledokol_start_with.append([3,bot[i]])
    for i in range(l//4*3,l):
        if bot[i] >= 0:
            ledokol_start_with.append([4,bot[i]])


    # In[457]:


    for reis in ledokol_start_with:
        waste_time = ledokol_time_way(data_from_site['start_point'][reis[1]], data_from_site['end_point'][reis[1]])
        
        time_start = data_from_site['start'][reis[1]]
        predict_time = data_from_site['start'][reis[1]] + timedelta(hours=waste_time[0])
        data_for_push.append([data_from_site['Наименование'][reis[1]], data_from_site['IMO'][reis[1]],
                            data_from_site['Ледовый класс'][reis[1]], data_from_site['Скорость'][reis[1]],
                            time_start.strftime('%Y-%m-%d %H:%M:%S'), predict_time.strftime('%Y-%m-%d %H:%M:%S'), waste_time[1]])


    # In[459]:


    return data_for_push


setting_path('setting_path')