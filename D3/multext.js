/**
 * 文本自动换行
 * Created by CLR on 2017-9-5.
 */
function appendMultiText(container, str, posX, posY, width, fontsize, fontfamily){
    fontsize = fontsize || 14;
    fontfamily = fontfamily || "simsun, arial";

    var strs = splitByLine(str,width,fontsize);

    var mulText = container.append("text")
        .attr("x",posX)
        .attr("y",posY)
        .style("font-size",fontsize)
        .style("font-family",fontfamily);

    mulText.selectAll("tspan")
        .data(strs)
        .enter()
        .append("tspan")
        .attr("x",mulText.attr("x"))
        .attr("dy","1em")
        .text(function(d){
            return d;
        });

    return mulText;

    function splitByLine(str,max,fontsize){
        var curLen = 0;
        var result = [];
        var start = 0, end = 0;
        for(var i=0;i<str.length;i++){
            var code = str.charCodeAt(i);
            var pixelLen = code > 255 ? fontsize : fontsize/2;
            curLen += pixelLen;
            if(curLen > max){
                end = i;
                result.push(str.substring(start,end));
                start = i;
                curLen = pixelLen;
            }
            if( i === str.length - 1 ){
                end = i;
                result.push(str.substring(start,end+1));
            }
        }
        return result;
    }
}
