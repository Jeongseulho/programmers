import math


def calDiffTime(inTime, outTime):
    outH, outM = map(int, outTime.split(':'))
    inH, inM = map(int, inTime.split(':'))
    if outM < inM:
        outM += 60
        outH -= 1
    diffH = outH - inH
    diffM = outM - inM
    return diffH * 60 + diffM


def solution(fees, records):
    기본시간 = fees[0]
    기본요금 = fees[1]
    단위시간 = fees[2]
    단위요금 = fees[3]

    totalRecordsLen = len(records)
    for i in range(totalRecordsLen):
        records[i] = records[i].split()
    records.sort(key=lambda x: (int(x[1]), x[0]))

    recordsDict = dict()
    for i in range(totalRecordsLen):
        carNum = records[i][1]
        recordsDict.setdefault(carNum, [])
        recordsDict[carNum].append(records[i])
    print(recordsDict)

    parkTimeDict = dict()
    for i in range(totalRecordsLen):
        carNum = records[i][1]
        parkTimeDict.setdefault(carNum, 0)

    carNumList = recordsDict.keys()
    for carNum in carNumList:
        idx = 0
        if len(recordsDict[carNum]) % 2:
            lastInTime = recordsDict[carNum].pop()[0]
            parkTime = calDiffTime(lastInTime, '23:59')
            parkTimeDict[carNum] += parkTime

        while idx < len(recordsDict[carNum]) - 1:
            inTime = recordsDict[carNum][idx][0]
            outTime = recordsDict[carNum][idx + 1][0]
            parkTime = calDiffTime(inTime, outTime)
            parkTimeDict[carNum] += parkTime
            idx += 2

    print(parkTimeDict)
    for carNum in carNumList:
        parkTime = parkTimeDict[carNum]
        if parkTime < 기본시간:
            cost = 기본요금
        else:
            cost = 기본요금 + math.ceil((parkTime - 기본시간) / 단위시간) * 단위요금
        parkTimeDict[carNum] = cost

    print(parkTimeDict)
    return list(parkTimeDict.values())
