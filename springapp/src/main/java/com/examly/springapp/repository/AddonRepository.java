package com.examly.springapp.repository;
import com.examly.springapp.entity.AddonModel;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import java.util.List;

@Repository
public interface AddonRepository extends JpaRepository<AddonModel, Integer>{

    List<AddonModel> findByOrderByAddonPriceAsc();

    List<AddonModel> findByOrderByAddonPriceDesc();

}
