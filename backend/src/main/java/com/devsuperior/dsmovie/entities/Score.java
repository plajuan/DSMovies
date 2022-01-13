package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="tb_score")
public class Score {
	@EmbeddedId
	private ScorePK id;
	private Double value;
	
	
	public Score() {
		id = new ScorePK();
	}

	public Score(Double value) {
		super();
		id = new ScorePK();
		this.value = value;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
	public void setMovie(Movie movie) {
		this.id.setMovie(movie);
	}
	
	public void setUser(User user) {
		this.id.setUser(user);
	}
	
	
}
