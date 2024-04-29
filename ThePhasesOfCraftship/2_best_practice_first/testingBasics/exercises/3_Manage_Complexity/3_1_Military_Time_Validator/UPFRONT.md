### Responsibilities:

- Should know if a time range have correct format.
    - "01:12 - 14:32" is a correcto format.
    - "21:54 - 23:44" is a correcto format.
    - "01:12-14:32" is not a correct format. 
    - "12.23 - 23.44" is not a correct format. 
    - "1223 - 2344" is not a correct format. 

- Should know if a military time have correct format.
    - "22:00" is a correct format.
    - "21:23" is a correct format.
    - "1.23" is not a correct format.
    - "1230" is not a correct format.
    - "10;23" is not a correct format.
    - ":323" is not a correct format.
    - "323:" is not a correct format.

- Should know if a military time is valid only if the hours are between 0 and 24 and the minutes between 0 and 59.
    - "22:00" is valid.
    - "22:40" is valid.
    - "09:66" is not valid.
    - "44:21" is not valid.
