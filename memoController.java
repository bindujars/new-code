package com.august.memo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/memo")

public class memoController {
    @org.springframework.beans.factory.annotation.Autowired
    MemoService  service;
    
    @GetMapping("/requestparam")
    public String getmap(@RequestParam String name){
        System.out.println(name);
        return  service.getResult();
    }

    @GetMapping("/pathvariable/{id}")
    public String map(@PathVariable("id") Integer id){
        System.out.println(id);
        return  "ReqParam";
    }
    

    @GetMapping("/getmapping")
    public String getString(){
        return  service.getResult();
    }


    @PostMapping("/postmapping")
    public Object PostValues (@RequestBody Object name){
        return service.postResult(name);
    }
    @PutMapping("/putmapping")
    public Object PutValues(@RequestParam Object name){
        return  service.putResult(name);
    }
   /* @PatchMapping("/edituser/{name}/{mark}")
    public String edituser(@PathVariable String name,@PathVariable Integer mark){
        return s.edituser(name,mark);
    }*/
    @DeleteMapping("/deletemapping")
    public Object deleteuser(@RequestBody Object id){
        return service.DeleteResult(id);
    }
}
