Goto settings and change database configerations before run the server.
If you are using nodemon to start the server use "nomdemon run start" command.
------------------------------------------------------------------------------------------------
Can use these endpoints to interact with employee_table
    1. PUT  - get list of employees     - localhost:8000/employees
    2. PUT  - get details of an emp     - localhost:8000/employees?id=123
    3. POST - Add employee              - localhost:8000/employees
        body -  {
                    "employee_id"   : //id,             --int
                    "salary_id"     : //sal_id,         --int
                    "name"          : //name,           --str
                    "dob"           : //YYYY-MM-DD,   --str
                    "employee_type" : //1/2/3/4,      --int
                    "gender"        : //M/F           --str
                }
    4. PUT - update an employee details - localhost:8000/employees
        body -  {
                    "employee_id"   : //id,             --int
                    "salary_id"     : //sal_id,         --int
                    "name"          : //name,           --str
                    "dob"           : //YYYY-MM-DD,     --str
                    "employee_type" : //1/2/3/4,        --int
                    "gender"        : //M/F             --str
                }
    5. DELETE- delete an employee       - localhost:8000/employees
         body - {
                    "employee_id"   : //id,             --int
                }
------------------------------------------------------------------------------------------------
Can use these endpoints to interact with daily_attendance
    1. PUT  - get attendance list       - localhost:8000/attendance
    2. PUT  - get attendance by date    - localhost:8000/attendance?date=2020-01-01
    3. POST - Add employee attendance   - localhost:8000/attendance
        body -  [
                    {
                        "date"          : "2020-05-30",     --str
                        "division"      : 1,                --int 
                        "employee_id"   : 31,               --int
                        "method"        : 1                 --int
                    },
                    {
                        "date"          : "2020-05-30",     --str
                        "division"      : 1,                --int 
                        "employee_id"   : 31,               --int
                        "method"        : 1                 --int
                    } .....
                ]
    4. PUT - update an employee details - localhost:8000/attendance
        body -  {
                    "date"          : "2020-05-30",     --str
                    "division"      : 1,                --int 
                    "employee_id"   :31,                --int
                    "method"        :1                  --int
                }
    5. DELETE- delete an employee       - localhost:8000/attendance
         body - {
                    "date"          : //YYYY-MM-DD,     --str
                    "employee_id    : //id              --int
                }
------------------------------------------------------------------------------------------------
Can use these endpoint to interact with vehicle_detail table
    1. GET - get list of vehicles       - localhost:8000/vehicles
------------------------------------------------------------------------------------------------