import { assert } from "chai"
import { MinMaxScaler, StandardScaler, RobustScaler } from "../../src/preprocessing/scalers"

describe("Preprocessing", function(){

    describe("MinMaxscaler", function(){

        it("basic test", function(){
            let data = [[-1, 2], [-0.5, 6], [0, 10], [1, 18]]
            let scaler = new MinMaxScaler()
            let fit_data = [ [ 0, 0 ], [ 0.25, 0.25 ], [ 0.5, 0.5 ], [ 1, 1 ] ]
            let transform_data = [[1.5, 0. ]];

            assert.deepEqual(scaler.fit(data).values,fit_data)
            assert.deepEqual(scaler.transform([[2, 2]]).values,transform_data)
        });
    })

    describe("StandardScaler", function(){

        it("basic test", function(){
            let data = [[0, 0], [0, 0], [1, 1], [1, 1]]

            let scaler = new StandardScaler()
            let fit_data = [ [ -1, -1 ], [ -1, -1 ], [ 1, 1 ], [ 1, 1 ] ]
            let transform_data = [ [ 3, 3 ] ];

            assert.deepEqual(scaler.fit(data).values, fit_data);
            assert.deepEqual(scaler.transform([[2, 2]]).values, transform_data)
        })
    });

    describe("RobustScaler", function(){
        it("basic test", function(){

            let data = [[3,1], [7,3], [8,4], [5,6], [12,5], [14,12], [21,23], [15,15], [18,2], [14,15]]
            // let data2 = [[4,100,900],[5,110,800],[21,220,890],[20,300,500]]
            let data2 = [0, 4, 4, 4, 7, 10, 11, 12, 14, 16, 17, 25]



            let scaler = new RobustScaler()

            // console.log(scaler.quantile(data2,true))

            console.log(scaler.fit(data2))
        });
    });
});